import { test, expect } from '@playwright/test';
import { JournifyPage } from '../pages/mjhome';

test('Journify homepage navigation', async ({ page }) => {
    const journify = new JournifyPage(page);

    await journify.goto();
    await journify.assertPageTitleContains('Journify');

    // Navigate to Discover section and perform search for specific destination
    await journify.clickDiscover();
    await journify.assertPageTitleContains('Personal Travel');
    await journify.search('Phuket');

    // Navigate to Book Flight + Hotel
    await journify.goto();
    const bookingPage = await journify.clickBookFlightHotelAndValidate();

    // Switch back to the first tab
    await journify.switchBackToMainTab();

    //npx playwright test --project=chromium tests/example.spec.ts --debug --headed
    //npx playwright test --project=firefox
    //npx playwright show-report
});
