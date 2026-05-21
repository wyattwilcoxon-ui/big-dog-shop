import React from 'react';

export default function VariantSelector({ variants, selectedId, onChange }) {
  if (!variants || variants.length <= 1) return null;

  // Group by option name (e.g. "Size", "Pack Size")
  const optionNames = [...new Set(variants.flatMap(v => v.options.map(o => o.name)))];

  return (
    <div className="space-y-4">
      {optionNames.map(optName => {
        const values = [...new Set(variants.map(v => v.options.find(o => o.name === optName)?.value).filter(Boolean))];
        const selectedVariant = variants.find(v => v.id === selectedId);
        const selectedValue = selectedVariant?.options.find(o => o.name === optName)?.value;

        return (
          <div key={optName}>
            <p className="font-brand text-sm text-pebble mb-2">{optName}</p>
            <div className="flex flex-wrap gap-2">
              {values.map(val => {
                const matchingVariant = variants.find(v =>
                  v.options.some(o => o.name === optName && o.value === val)
                );
                const isSelected = selectedValue === val;
                const isAvailable = matchingVariant?.available;

                return (
                  <button
                    key={val}
                    onClick={() => matchingVariant && onChange(matchingVariant.id)}
                    disabled={!isAvailable}
                    className={`px-4 py-2 rounded-xl font-brand text-sm border-2 transition-all ${
                      isSelected
                        ? 'bg-midnight text-white border-midnight'
                        : isAvailable
                        ? 'bg-white text-midnight border-midnight hover:bg-fog'
                        : 'bg-fog text-stone border-fog cursor-not-allowed line-through'
                    }`}
                  >
                    {val}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}