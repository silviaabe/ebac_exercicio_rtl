import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from '..';

describe('Teste para o componente PostComments', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComments />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar o primeiro comentário na lista', () => {
        render(<PostComments />);
        fireEvent.change(screen.getByTestId('comment-post'), { 
            target: { 
                value: 'Primeiro comentário' 
            } 
        });
        fireEvent.click(screen.getByTestId('add-comment-btn'))
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
    })

    test('Deve adicionar o segundo comentário na lista', () => {
        render(<PostComments />);
        fireEvent.change(screen.getByTestId('comment-post'), { 
            target: { 
                value: 'Segundo comentário' 
            } 
        });
        fireEvent.click(screen.getByTestId('add-comment-btn'))
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    })
});