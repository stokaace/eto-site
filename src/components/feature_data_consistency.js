/* This example requires Tailwind CSS v2.0+ */
import { UploadIcon, ChartSquareBarIcon,CubeIcon } from '@heroicons/react/outline'


const communicationFeatures = [
  {
    id: 1,
    name: 'Load',
    description:
      'Create Pytorch/TF DataLoaders without needing manual adapters.',
    icon: UploadIcon,
  },
  {
    id: 2,
    name: 'Unify',
    description:
      'Analyze, search, and training using a single source of truth.',
    icon: CubeIcon,
  },
  {
    id: 2,
    name: 'Share',
    description:
      'Connect to BI tools via JDBC to create dashboards and share your data.',
    icon: ChartSquareBarIcon,
  }
]

export default function FeatureDataConsistency() {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            
          <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Maintain end-to-end data consistency
</h3>
              <p className="mt-3 text-lg text-gray-500">
              Eto is integrated with the AI tooling ecosystem throughout your entire workflow so you never have to worry about maintaining multiple copies of the same data in multiple formats.
              </p>

              <dl className="mt-10 space-y-10">
                {communicationFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                  </div>
                ))}
              </dl>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="img/screen-sql.png"
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
