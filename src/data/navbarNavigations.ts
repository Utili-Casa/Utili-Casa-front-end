const navbarNavigations = [
  {
    title: "Home",
    child: [
      { title: "Casa e Jardim", child: [
          {
            title: "Acessórios para Vinho", url: "/market-1",
          },
          {
            title: "Cozinha", url: "/market-1",
          },
          {
            title: "Jardim", url: "/market-1",
          },
        ]
      },
      { title: "Utilidades domésticas", child: [
        {
          title: "Jarros", url: "/market-1",
        },
        {
          title: "Potes Organizatorios", url: "/market-1",
        },
        {
          title: "Limpeza", url: "/market-1",
        },
      ] },
      { title: "Eletrônicos", child: [
        {
          title: "Capinhas de Celular", url: "/market-1",
        },
        {
          title: "Cabos e Carregadores", url: "/market-1",
        },
        {
          title: "Fones de Ouvido", url: "/market-1",
        },
      ] },
    ],
  },
  {
    title: "Pages",
    child: [
      {
        title: "Sale Page",
        child: [
          { title: "Version 1", url: "/sale-page-1" },
          { title: "Version 2", url: "/sale-page-2" },
        ],
      },
      {
        title: "Vendor",
        child: [
          { title: "All vendors", url: "/shops" },
          { title: "Vendor store", url: "/shops/scarlett-beauty" },
        ],
      },
      {
        title: "Shop",
        child: [
          { title: "Search product", url: "/product/search/mobile phone" },
          { title: "Single product", url: "/product/lord-2019" },
          { title: "Cart", url: "/cart" },
          { title: "Checkout", url: "/checkout" },
          { title: "Alternative Checkout", url: "/checkout-alternative" },
        ],
      },
    ],
  },
  {
    title: "User Account",
    child: [
      {
        title: "Orders",
        child: [
          { title: "Order List", url: "/orders" },
          { title: "Order Details", url: "/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8" },
        ],
      },
      {
        title: "Profile",
        child: [
          { title: "View Profile", url: "/profile" },
          { title: "Edit Profile", url: "/profile/edit" },
        ],
      },
      {
        title: "Address",
        child: [
          { title: "Address List", url: "/address" },
          { title: "Add Address", url: "/address/create" },
        ],
      },
      {
        title: "Support tickets",
        child: [
          { title: "All tickets", url: "/support-tickets" },
          { title: "Ticket details", url: "/support-tickets/product-broken.-i-need-refund" },
        ],
      },
      { title: "Wishlist", url: "/wish-list" },
    ],
  },
  {
    title: "Vendor Account",
    child: [
      { title: "Dashboard", url: "/vendor/dashboard" },
      {
        title: "Products",
        child: [
          { title: "All products", url: "/vendor/products" },
          { title: "Add/Edit product", url: "/vendor/products/248104" },
        ],
      },
      {
        title: "Orders",
        child: [
          { title: "All orders", url: "/vendor/orders" },
          { title: "Order details", url: "/vendor/orders/248104" },
        ],
      },
      { title: "Profile", url: "/vendor/account-settings" },
    ],
  },
  { title: "Track My Orders", url: "/orders" },
];

export default navbarNavigations;
