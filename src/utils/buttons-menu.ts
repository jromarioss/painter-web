export interface IBUTTONS_MENU {
  id: number;
  label: string;
  status: number;
  value: string;
}

export const BUTTONS_MENU: IBUTTONS_MENU[] = [
  {id:0,label:"Home",status:1,value:"home"},
  {id:1,label:"Sobre",status:1,value:"about"},
  {id:2,label:"Serviços",status:1,value:"services"},
  {id:3,label:"Contato",status:1,value:"contact"}
];