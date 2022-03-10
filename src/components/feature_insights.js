/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, SwitchHorizontalIcon, LightningBoltIcon, DatabaseIcon } from '@heroicons/react/outline'


const communicationFeatures = [
  {
    id: 1,
    name: 'Integrations',
    description:
      'Connect to Coco, ROS, Kitti, Nuscenes, and more.',
    icon: SwitchHorizontalIcon,
  },
  {
    id: 2,
    name: 'Managed',
    description:
      'Run ETL jobs without worrying about cluster scaling or resource management.',
    icon: LightningBoltIcon,
  },
  {
    id: 2,
    name: 'Flexible',
    description:
      'Store data in your own data lake.',
    icon: DatabaseIcon,
  }
]

export default function FeatureInsights() {
  return (
    <div className="py-8 bg-gray-50 overflow-hidden lg:py-12">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        

        <div className="relative mt-8 sm:mt-16 lg:mt-12">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Turn-key ingestion for AI data</h3>
              <p className="mt-3 text-lg text-gray-500">
              We understand open-source formats so you don't have to write custom data converters over and over again.
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

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
              </svg>
              <img
                className="relative mx-auto"
                width={490}
                src="img/datasets.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
