// for rtl
import "@testing-library/jest-dom/extend-expect";
// for enzyme
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-enzyme";
configure({ adapter: new Adapter() });


