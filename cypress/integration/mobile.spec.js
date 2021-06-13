/// <reference types="cypress" />

let devices = [
  {
    name: 'ipad-2',
    orientation: 'portrait'
  },
  {
    name: 'ipad-2',
    orientation: 'landscape'
  },
  {
    name: 'iphone-4',
    orientation: 'portrait'
  },
  {
    name: 'iphone-6',
    orientation: 'portrait'
  },
  {
    name: 'iphone-6+',
    orientation: 'portrait'
  },
  {
    name: 'iphone-x',
    orientation: 'portrait'
  },
  {
    name: 'iphone-xr',
    orientation: 'portrait'
  },
  {
    name: 'macbook-11',
    orientation: 'portrait'
  },
  {
    name: 'macbook-13',
    orientation: 'portrait'
  },
  {
    name: 'macbook-15',
    orientation: 'portrait'
  },
  {
    name: 'macbook-16',
    orientation: 'portrait'
  },
  {
    name: 'samsung-note9',
    orientation: 'portrait'
  },
  {
    name: 'samsung-s10',
    orientation: 'portrait'
  },
]
let links = [
  {
    name: 'home',
    link: '/se-testing/repo-for-testing'
  },
  {
    name: 'repo_home',
    link: '/se-testing/repo-for-testing'
  },
  {
    name: 'pr_detail',
    link: '/se-testing/repo-for-testing/pull/8'
  },
  {
    name: 'project_detail',
    link: '/se-testing/repo-for-testing/projects/3'
  }
]

context('Mobile device test', () => {
  before(() => {
    cy.login();
  })
  let testTime = (new Date()).toISOString();
  it('test for different viewports', function () {
    for (let link of links) {
      cy.visit(link.link);
      for (let device of devices) {
        cy.viewport(device.name, device.orientation);
        cy.screenshot(`${testTime}/${link.name}_${device.name}_${device.orientation}`);
      }
    }
  });
})
