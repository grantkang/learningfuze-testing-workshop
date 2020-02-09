import { threadsController } from '../threadsController'

describe('threadsController', () => {
  test('should respond with status 200 and a JSON list of requests on a GET request', () => {
    // arrange
    const req = {
      method: 'GET',
    }

    const mockJson = jest.fn()

    const mockStatus = jest.fn().mockImplementation(() => ({ json: mockJson }))

    const res = {
      status: mockStatus,
    }

    // act
    threadsController(req, res)

    // assert
    expect(mockJson).toHaveBeenCalledTimes(1)
    expect(mockJson).toHaveBeenCalledWith([
      {
        comments: ['5tvf1vv39', '7sack1xhe'],
        content: 'This is the content for the thread',
        id: 'n4uajfhps',
        reactions: { '👍': 20, '🔥': 30 },
        title: 'My first thread!',
      },
      {
        comments: ['n99putsfi'],
        content:
          "This is the content for the second thread, it's got some stuffz",
        id: '624p8jvnk',
        reactions: { '🚀': 3 },
        title: 'Another cool thread',
      },
    ])
  })
})
