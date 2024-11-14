import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BlueBtn from '@/components/general/BlueBtn';

describe('BlueBtn Component', () => {
  it('should render a button when isNotLink is true with a text showing the title on the button', () => {
    render(
      <BlueBtn
        linkTo='/'
        isNotLink={true}
        btnText='Click me'
        hasBlueBackground={true}
        btnType='button'
        additionalStyles=''
        hasLoadingDots={false}
        isLoading={false}
      />
    );

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Click me');
  });

  it('should render a Link component when isNotLink is false', () => {
    render(
      <BlueBtn
        linkTo='/'
        isNotLink={false}
        btnText='Click me'
        hasBlueBackground={true}
        btnType='button'
        additionalStyles=''
        hasLoadingDots={false}
        isLoading={false}
      />
    );

    const linkElement = screen.getByRole('link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent('Click me');
  });

  it('should display a button with a blue background when the prop hasBlueBackground is true', () => {
    render(
      <BlueBtn
        linkTo='/'
        isNotLink={true}
        btnText='Click me'
        hasBlueBackground={true}
        btnType='button'
        additionalStyles=''
        hasLoadingDots={false}
        isLoading={false}
      />
    );

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('blue--btn__container');
  });

  it('should display a button with a blue border when the prop hasBlueBackground is false', () => {
    render(
      <BlueBtn
        linkTo='/'
        isNotLink={true}
        btnText='Click me'
        hasBlueBackground={false}
        btnType='button'
        additionalStyles=''
        hasLoadingDots={false}
        isLoading={false}
      />
    );

    const btnElement = screen.getByRole('button');
    expect(btnElement).toHaveClass('blue--border--btn');
  });

  it('should display a button with loading dots when the prop hasLoadingDots is true', () => {
    render(
      <BlueBtn
        linkTo='/'
        isNotLink={true}
        btnText='Click me'
        hasBlueBackground={true}
        btnType='button'
        additionalStyles=''
        hasLoadingDots={true}
        isLoading={false}
      />
    );

    const btnElement = screen.getByRole('button');
    expect(btnElement).toHaveClass('blue-btn__with--dots');
  });

  it('should display a button with a loading state when the prop isLoading is true', () => {
    render(
      <BlueBtn
        linkTo='/'
        isNotLink={true}
        btnText='Click me'
        hasBlueBackground={true}
        btnType='button'
        additionalStyles=''
        hasLoadingDots={true}
        isLoading={true}
      />
    );

    const btnElement = screen.getByRole('button');

    // To check the loading dot is in the button
    const loadingElement = btnElement.querySelector('.loader');

    expect(loadingElement).toBeInTheDocument();
  });
});
