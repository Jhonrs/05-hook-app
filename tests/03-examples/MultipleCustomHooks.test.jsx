import { render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';
import { useFetch } from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useFetch');


describe('Pruebas en <MultipleCustomHooks />', () => { 

    test('Debe de mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue({
            data: null, 
            isLoading: true, 
            hasError: null
        });
        
        render(<MultipleCustomHooks/>);
        
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText('Breakingbad Quotes') );

        const nextButton = screen.getByRole('button', {name: 'Next Quote'});
        expect( nextButton.disabled ).toBeTruthy();
    });


});