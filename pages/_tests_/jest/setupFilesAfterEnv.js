import "@testing-library/jest-dom/extend-expect";
import 'whatwg-fetch';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });