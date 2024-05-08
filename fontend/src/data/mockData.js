export const mockDataTeam = [
    {
        id: 1,
        name: "Jon Snow",
        email: "jonsnow@gmail.com",
        phone: "(+33) 6548522",
        access: "admin",
    },
    {
        id: 2,
        name: "Alix Snow",
        email: "alixsnow@gmail.com",
        phone: "(+33) 698414122",
        access: "manager",
    },
    {
        id: 3,
        name: "Jaime Lannister",
        email: "jaimelannister@gmail.com",
        phone: "(+33) 69588472",
        access: "user",
      },
      {
        id: 5,
        name: "Daenerys Targaryen",
        email: "daenerystargaryen@gmail.com",
        phone: "(+33) 69418525",
        access: "user",
      },
];

export const mockDataContacts = [
    {
      id: 1,
      name: "Jon Snow",
      email: "jonsnow@gmail.com",
      age: 35,
      phone: "(665)121-5454",
      address: "0912 Won Street, Alabama, SY 10001",
      city: "New York",
      zipCode: "10001",
      registrarId: 123512,
    },
    {
      id: 2,
      name: "Cersei Lannister",
      email: "cerseilannister@gmail.com",
      age: 42,
      phone: "(421)314-2288",
      address: "1234 Main Street, New York, NY 10001",
      city: "New York",
      zipCode: "13151",
      registrarId: 123512,
    },
    {
      id: 3,
      name: "Jaime Lannister",
      email: "jaimelannister@gmail.com",
      age: 45,
      phone: "(422)982-6739",
      address: "3333 Want Blvd, Estanza, NAY 42125",
      city: "New York",
      zipCode: "87281",
      registrarId: 4132513,
    },
];

export const mockDataInvoices = [
    {
      id: 1,
      name: "Jon Snow",
      email: "jonsnow@gmail.com",
      cost: "21.24",
      phone: "(665)121-5454",
      date: "03/12/2022",
    },
    {
      id: 2,
      name: "Cersei Lannister",
      email: "cerseilannister@gmail.com",
      cost: "1.24",
      phone: "(421)314-2288",
      date: "06/15/2021",
    },
    {
      id: 3,
      name: "Jaime Lannister",
      email: "jaimelannister@gmail.com",
      cost: "11.24",
      phone: "(422)982-6739",
      date: "05/02/2022",
    },
];

export const mockTransactions = [
    {
      txId: "01e4dsa",
      user: "johndoe",
      date: "2021-09-01",
      cost: "43.95",
    },
    {
      txId: "0315dsaa",
      user: "jackdower",
      date: "2022-04-01",
      cost: "133.45",
    },
    {
      txId: "01e4dsa",
      user: "aberdohnny",
      date: "2021-09-01",
      cost: "43.95",
    },
    {
      txId: "51034szv",
      user: "goodmanave",
      date: "2022-11-05",
      cost: "200.95",
    },
];

export const mockBarData = [
    {
      country: "AD",
      "hot dog": 137,
      "hot dogColor": "hsl(229, 70%, 50%)",
      burger: 96,
      burgerColor: "hsl(296, 70%, 50%)",
      kebab: 72,
      kebabColor: "hsl(97, 70%, 50%)",
      donut: 140,
      donutColor: "hsl(340, 70%, 50%)",
    },
    {
      country: "AE",
      "hot dog": 55,
      "hot dogColor": "hsl(307, 70%, 50%)",
      burger: 28,
      burgerColor: "hsl(111, 70%, 50%)",
      kebab: 58,
      kebabColor: "hsl(273, 70%, 50%)",
      donut: 29,
      donutColor: "hsl(275, 70%, 50%)",
    },
    {
      country: "AF",
      "hot dog": 109,
      "hot dogColor": "hsl(72, 70%, 50%)",
      burger: 23,
      burgerColor: "hsl(96, 70%, 50%)",
      kebab: 34,
      kebabColor: "hsl(106, 70%, 50%)",
      donut: 152,
      donutColor: "hsl(256, 70%, 50%)",
    },
];

export const mockPieData = [
    {
      id: "hack",
      label: "hack",
      value: 239,
      color: "hsl(104, 70%, 50%)",
    },
    {
      id: "make",
      label: "make",
      value: 170,
      color: "hsl(162, 70%, 50%)",
    },
    {
      id: "go",
      label: "go",
      value: 322,
      color: "hsl(291, 70%, 50%)",
    },
];


export const mockLineData = [
    {
      id: "japan",
      color: tokens("dark").greenAccent[500],
      data: [
        {
          x: "plane",
          y: 101,
        },
        {
          x: "helicopter",
          y: 75,
        },
        {
          x: "boat",
          y: 36,
        },
        ],
    },
];

export const mockGeographyData = [
    {
      id: "AFG",
      value: 520600,
    },
    {
      id: "AGO",
      value: 949905,
    },
    {
      id: "ALB",
      value: 329910,
    },
];