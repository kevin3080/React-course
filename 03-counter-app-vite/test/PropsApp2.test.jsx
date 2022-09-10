import { getByText, render, screen } from "@testing-library/react"
import { PropsApp } from "../src/PropsApp"


describe('Pruebas en PropsApp', () => { 

    const title = 'Frist App';
    const subTitle = 's';

    test('debe de hacer match con el snapshot', () => { 


        const { container } = render( <PropsApp title={ title } subTitle={subTitle}/> )
        expect ( container ).toMatchSnapshot();
    });

     test('Debe de mostrar el mensaje Frist App', () => { 

         render(<PropsApp title={title} subTitle={subTitle}/>)
        // screen.debug(); // con esto puedes ver lo que hay en el <body></body>
        expect(screen.getByText(title)).toBeTruthy(); // que exista el title
        //expect(screen.getByText(title)).not.toBeTruthy(); // que no exista el title

    });

      test('debe de mostar el titulo en un h1', () => { 
        render(<PropsApp title={title} subTitle={subTitle}/>)
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);

    });

    test('debe de mostrar el subitulo enviado por props', () => { 
       render(<PropsApp 
       title={title}
       subTitle={subTitle}
       /> );
     
     })
 });