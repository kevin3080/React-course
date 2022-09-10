import { getByText, render } from "@testing-library/react"
import { PropsApp } from "../src/PropsApp"


describe('Pruebas en PropsApp', () => { 

    // test('debe de hacer match con el snapshot', () => {


    //     const title = 'Hola Soy Goku';
    //     const subTitle = 3;

    //    const {container} =  render( <PropsApp title={title} subTitle={subTitle}/>  )
    //    // console.log(container);
    //     //el container es como un nodo de html
    //     expect( container ).toMatchSnapshot();//toma una copia del html y compara que no cambie, como una fotografia
    //     // se puede actualizar el snapshot presionando la tecla 'u' eso remplaza el snap a los valores cambiados
    // });

    test('debe de mostrar el titulo en un h1', () => { 

        const title = 'Hola, soy Goku';
        const subTitle = 'subtitulo';
        const {container, getByText, getByTestId} =  render( <PropsApp title={title} subTitle={subTitle}/>  )
        expect( getByText(title)).toBeTruthy// osea se espera que exista el title
  
        // const h1 = container.querySelector('h1');
        // console.log(h1.innerHTML);
        // expect(h1.innerHTML).toContain( title );
        // toContain: que contenga el titulo
        expect( getByTestId('test-title') ).toBe.toBeTruthy

     });

     test('Debe de mostrar el subtitulo enviado por props', () => { 
        const title = 'Hola, soy Goku';
        const subTitle = 'subtitulo';
        const {getByText} =  render( 
            <PropsApp 
                title={title} 
                subTitle={subTitle}
            />  
        );
        expect( getByText(subTitle)).toBeTruthy// osea se espera que exista el title

      });
 });