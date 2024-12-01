import React from 'react';
import { Check, X } from 'lucide-react';

const comparisonData = {
  features: [
    'Unlimited Design Requests',
    'Brand Identity Design',
    'UI/UX Design',
    'Marketing Design',
    'Dedicated Design Team',
    'Same-Day Delivery',
    'Source Files Included',
    'Money-back Guarantee'
  ],
  competitors: [
    {
      name: 'Creatiwise',
      included: [true, true, true, true, true, true, true, true],
      highlight: true
    },
    {
      name: 'Other Design Services',
      included: [false, true, true, true, false, false, true, false],
      highlight: false
    },
    {
      name: 'Freelance Platforms',
      included: [false, true, false, true, false, false, false, true],
      highlight: false
    }
  ]
};

const CompetitorAdvantage = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How We Compare</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See why leading businesses choose Creatiwise as their design partner
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-t border-gray-200">
                <th className="py-6 px-6 text-left text-lg font-semibold text-gray-900">Features</th>
                {comparisonData.competitors.map((competitor, index) => (
                  <th
                    key={index}
                    className={`py-6 px-6 text-left text-lg font-semibold ${
                      competitor.highlight ? 'text-purple-600' : 'text-gray-900'
                    }`}
                  >
                    {competitor.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonData.features.map((feature, featureIndex) => (
                <tr
                  key={featureIndex}
                  className={`border-t border-gray-200 ${
                    featureIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}
                >
                  <td className="py-4 px-6 text-sm text-gray-900">{feature}</td>
                  {comparisonData.competitors.map((competitor, competitorIndex) => (
                    <td
                      key={competitorIndex}
                      className={`py-4 px-6 ${
                        competitor.highlight ? 'bg-purple-50/50' : ''
                      }`}
                    >
                      {competitor.included[featureIndex] ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <X className="w-5 h-5 text-red-500" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CompetitorAdvantage;