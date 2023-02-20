export class ItemsDto {
  id: string="";
  name: string="";
  item: string="";
  quantity: number | undefined;
  amount: string="";
}

export class Items {

  public static ITEMS: Array<ItemsDto> = [
    {
      id:'GH001',
      name: 'Vinay Bharti',
      item: 'Playstation',
      quantity: 1,
      amount:'23000'
    },
    {
      id:'GH002',
      name: 'Vishal Bharti',
      item: 'GTA V',
      quantity: 3,
      amount:'5000'
    },
    {
      id:'GH003',
      name: 'Mohan Bharti',
      item: 'GTA VI',
      quantity: 1,
      amount:'5560'
    },
    {
      id:'GH004',
      name: 'Ayan Dey',
      item: 'Red Redemption',
      quantity: 1,
      amount:'4500'
    },
    {
      id:'GH005',
      name: 'Ash Sharma',
      item: 'COD',
      quantity: 5,
      amount:'2451'
    },
    {
      id:'GH006',
      name: 'Joshua Weissman',
      item: 'COD-1',
      quantity: 1,
      amount:'2421'
    },
    {
      id:'GH007',
      name: 'Wood Neal',
      item: 'COD-2',
      quantity: 2,
      amount:'2151'
    },
    {
      id:'GH008',
      name: 'Nishant Sharma',
      item: 'Boat',
      quantity: 5,
      amount:'2401'
    },
    {
      id:'GH009',
      name: 'Nigel Chang',
      item: 'Modern Warfare',
      quantity: 1,
      amount:'2800'
    },
    {
      id:'GH010',
      name: 'Tanmay Bhat',
      item: 'Fall guy',
      quantity: 1,
      amount:'2400'
    },
    {
      id:'GH011',
      name: 'Samay Raina',
      item: 'Chess',
      quantity: 1,
      amount:'500'
    }
  ];


}


