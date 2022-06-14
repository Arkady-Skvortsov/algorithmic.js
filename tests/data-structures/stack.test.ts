import { Stack } from "../../lib/utils/data-structures/stack";
const mockStack = jest.fn();

jest.mock("../../lib/utils/data-structures/stack", () => {
  return jest.fn().mockImplementation(() => {
    return { Stacks: mockStack }
  })
});

describe('Stack', () => {
  beforeAll(() => {
    
  });

  it('Stack should be defined', () => {
    expect(Stack).toBeDefined();
  });

  it('Should be push in stack', () => {
    
  });

  xit('Should be pop from stack', () => {});

  xit('First element should be equal 200', () => {});

  xit('200 should be find', () => {});

  xit('Peek should be equal 50', () => {});

  xit('Size should be equal 2', () => {});

  xit("Stack shouldn't be empty", () => {});

  xit('Stack should be print like', () => {});
});
