import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DropDownMenu from '@/components/general/DropDownMenu';

describe('DropDown Component', () => {
  it('should show menu when dropdown is clicked', () => {
    const { container } = render(
      <DropDownMenu
        options={[
          {
            label: <p>Hello</p>,
            value: 'Hello',
          },
        ]}
        onChange={() => {}}
      />
    );

    const dropDownContainer = container.querySelector('.dropdown');
    expect(dropDownContainer).toBeInTheDocument();

    // click the dropdown menu to change the state of the dropdown
    if (dropDownContainer) {
      fireEvent.click(dropDownContainer);
    }

    expect(container.querySelector('.dropdown-menu')).toBeInTheDocument();
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
