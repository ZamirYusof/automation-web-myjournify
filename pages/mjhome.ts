import { Page, Locator, expect } from '@playwright/test';

export class JournifyPage {
    readonly page: Page;
    readonly discoverLink: Locator;
    readonly bookFlightHotelLink: Locator;
    readonly travelPassLink: Locator;
    readonly thingsToDoLink: Locator;
    readonly searchBox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.discoverLink = page.locator('text=Discover');
        //this.bookFlightHotelLink = page.locator('text=Book Flight + Hotel packages.');
        this.bookFlightHotelLink = page.getByRole('link', { name: 'Learn more' }).first();
        this.travelPassLink = page.locator('text=Save more with travel passes');
        this.thingsToDoLink = page.locator('text=Explore things to do');
        this.searchBox = page.locator('input[type="search"]');

    }

    async goto() {
        await this.page.goto('https://myjournify.com/');
    }

    async clickDiscover() {
        await this.discoverLink.click();
    }

    async clickBookFlightHotelAndValidate() {
        // Capture the new tab when clicking the link
        const [bookingPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.bookFlightHotelLink.click()
        ]);

        // Wait until the new tab is fully loaded
        await bookingPage.waitForLoadState();

        // Validate the page title in the new tab
        await expect(bookingPage).toHaveURL('https://shop.myjournify.com/mini-program/holidays');

        // Return the new page
        // return bookingPage;
    }

    async switchBackToMainTab() {
        // Just bring focus back to the original page
        await this.page.bringToFront();
        return this.page;
    }

    async search(term: string) {
        await this.searchBox.fill(term);
        await this.page.keyboard.press('Enter');
        const resultButton = this.page.locator('role=button').filter({ hasText: term });
        await expect(resultButton.first()).toBeVisible();

        // ✅ Take only the first result
        const firstResult = resultButton.first();

        // ✅ Capture the full text of the button
        const buttonText = await firstResult.innerText();
        console.log(`Button text: ${buttonText}`);

    }

    async assertPageTitleContains(keyword: string) {
        await expect(this.page).toHaveTitle(new RegExp(keyword, 'i'));
    }
}
