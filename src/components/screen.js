/* This example requires Tailwind CSS v2.0+ */
import { ChartSquareBarIcon } from '@heroicons/react/outline'

export default function Screen() {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                  <ChartSquareBarIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                Get insights from your AI data in seconds
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                Compute distributions, understand model performance, and find high-value training examples,
all using simple SQL or DataFrame APIs.
                </p>
                <div className="mt-6">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeWELVcsea5eKnwjoTGjjNJnqgVm4-APtYkpLPioKgYlihK6Q/viewform"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Get access
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;I no longer need Data Engineering support to unlock data for our business teams.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src="https://media-exp1.licdn.com/dms/image/C5603AQHnaB9urX9lHQ/profile-displayphoto-shrink_800_800/0/1627677309442?e=1652313600&v=beta&t=dLSMoFyEQnG7911m5_pSD1WYNHVtbAfga0BFubh3kTs"
                        alt=""
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">John Trenkle, Chief Data Scientist, TubiTV</div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="img/screen-model-confusion.png"
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
