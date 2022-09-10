import { fireEvent, render,screen} from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"


describe('Pruebas en el CounterApp ', () => { 
    const initialValue = 100;
    test('Debe de hacer match con el snapshot', () => { 
        
        
        const { container } = render( <CounterApp value = {initialValue}/> )
        expect ( container ).toMatchSnapshot(); 

    });
    test('Debe de mostrar que el valor inicial del contador sea 100', () => { 
       render(<CounterApp value={100}/>);
       expect(screen.getByText(100)).toBeTruthy();
     });

     test('debe de auemtar con el botor +1', () => { 
        render(<CounterApp value={initialValue}/>)
        // con el fireEvent podemos simular varias acciones entre ellas el click
        fireEvent.click( screen.getByText('+1') );
        expect(screen.getByText('101')).toBeTruthy();
    });
    test('debe decrementar con el botor -1', () => { 
        render(<CounterApp value={initialValue}/>)
        // con el fireEvent podemos simular varias acciones entre ellas el click
        fireEvent.click( screen.getByText('-1') );
        expect(screen.getByText('99')).toBeTruthy();
        //screen.debug();
    })
    test('Debe de funcionar el botón de reset', () => { 
       render(<CounterApp value={ initialValue }/>);
       fireEvent.click( screen.getByText('+1') );
       fireEvent.click( screen.getByText('+1') );
       fireEvent.click( screen.getByText('+1') );
       fireEvent.click( screen.getByText('+1') );
       fireEvent.click( screen.getByText('+1') );
       //fireEvent.click(screen.getByText('Reset'));
      // screen.getByRole('button', {name: "btn-reset"})
       fireEvent.click(screen.getByRole('button', {name: "btn-reset"}))
       
       //screen.debug();
        expect( screen.getByText(initialValue) ).toBeTruthy();
     })
})