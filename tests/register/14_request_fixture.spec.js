import test, { expect } from '@playwright/test';

test('request',async function reqFixture({request}){

    let payLoad ={
        courseId: "playwright",
        courseName: "Test Automation with Playwright",
        quantity: 1,
        amount: 10200,
        currency: "LKR",
        cardHolder: "qqqqqqqqq",
        cardNumberLast4: "2222",
        timestamp: "2026-05-23T09:47:27.882Z",
        type: "payment",
        id: 101
    }

    let result = await request.post('https://jsonplaceholder.typicode.com/posts',{
       data:payLoad 
    });

    expect(result.status()).toBe(201);

    //Convert to json format
    let resultBody = await result.json();

    expect(resultBody.amount).toBe(10200);
    expect(resultBody.courseName).toBe('Test Automation with Playwright');
    
})