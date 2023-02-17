import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Buton/Button';

describe('Button', () => {
    test('Test render', () => {
        render(<Button>Button</Button>);
        expect(screen.getByText('Button')).toBeInTheDocument();
    });

    test('Test clear theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Button</Button>);
        expect(screen.getByText('Button')).toHaveClass('clear');
    });
});
