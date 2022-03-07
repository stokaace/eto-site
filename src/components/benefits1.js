import {
    CogIcon,
    InboxIcon,
    RefreshIcon,
  } from '@heroicons/react/outline'
  
  const features = [
    {
      name: 'No setup',
      description: 'Never write another data converter.',
      icon: CogIcon,
    },
    {
      name: 'Organized',
      description: 'Throw away one-off analysis scripts.',
      icon: InboxIcon,
    },
    {
      name: 'Insightful',
      description: 'Know exactly how to improve.',
      icon: RefreshIcon,
    }
  ]
  
  export default function Benefits() {
    return (
      <div className="relative bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-base font-semibold uppercase tracking-wider text-indigo-600">AI faster</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          The easiest way to work with AI datasets
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          Eto sits on top of your existing data lake and helps you ingest, manage, and analyze AI datasets every step of the way
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                      <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }