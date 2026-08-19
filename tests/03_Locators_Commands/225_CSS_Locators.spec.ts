import {test, expect} from '@playwright/test'

test("locators are lazy, strict, and auto-wait", async({ page }) =>{
    await page.goto("https://awesomeqa.com/css/");
    const allSpans = page.locator("div.first > span");
    let countSpan = await allSpans.count();
    console.log(countSpan);

    const span1 = await allSpans.first().textContent();
    const span2 = await allSpans.nth(1).textContent();
    const span3 = await allSpans.nth(2).textContent();
    const span4 = await allSpans.nth(3).textContent();
    const lastSpan = await allSpans.last().textContent();

    console.log("First (Span 1):", span1);
    console.log("Second (Span 2):", span2);
    console.log("Third (Span 3):", span3);
    console.log("Fourth (Span 4):", span4);
    console.log("Last (Span 7):", lastSpan);

    for (let i = 0; i < countSpan; i++){
        let span_ith = await allSpans.nth(i).textContent();
        console.log(span_ith);
    }

})