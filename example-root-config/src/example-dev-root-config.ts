require('./store.ts');

System.import('single-spa').then( singleSpa =>{
  singleSpa.registerApplication({
    name: "@example-dev/header",
    app: () => System.import("@example-dev/header"),
    activeWhen: ["/"]
  });

  singleSpa.registerApplication({
    name: "@example-dev/counter",
    app: () => System.import("@example-dev/counter"),
    activeWhen: ["/"]
  });

  singleSpa.start({
    urlRerouteOnly: true,
  });
})

