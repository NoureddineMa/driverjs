



const driver = window.driver.js.driver;


const driverObj = driver({
  showProgress: true,
  steps: [
    { element: '.s1', popover: { title: 'Title', description: 'Description' } },
    { element: '.s2', popover: { title: 'Title', description: 'Description' } },
    { element: '.s3', popover: { title: 'Title', description: 'Description' } },
    { element: '.s4', popover: { title: 'Title', description: 'Description' } },
  ]
});

driverObj.drive();