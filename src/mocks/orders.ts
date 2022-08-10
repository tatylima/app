import { OrderItemType } from "types/OrderItemType";

export const orders: OrderItemType[] = [
	
	{
		product: {
			id:          '507f191e810c19729de860ea',
			name:        'Alice',
			description: 'Alice no pais das maravilhas',
			image:       'assets/img/alice.png',
			price:       40.69,
		},
		quantity: 1,
		observation: '',
	},
	{
		product: {
			id:          '507f191e810c19729de860ea',
			name:        'Assasins Creed Rogue',
			description: 'Jogo de tiro',
			image:       'assets/img/Assasins Creed Rogue.png',
			price:       40.29,
		},
		quantity: 3,
		observation: '',
	},
	{
		product: {
			id:          '507f191e810c19729de860ea',
			name:        'DeadFall Adventure',
			description: 'Tiro em primeira pessoa,jogo de ação.',
			image:       'assets/img/DeadFall Adventure.png',
			price:       30.29,
		},
		quantity: 1,
		observation: '',
	},
];