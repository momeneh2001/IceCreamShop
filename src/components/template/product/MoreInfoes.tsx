import React from 'react'

function MoreInfoes() {

    return (
        <div className="mt-4 p-4 border rounded-lg bg-white shadow-sm">
            <p className="text-lg font-medium mb-2">Additional Information:</p>
            <hr className="border-gray-300 mb-4" />

            <main className="space-y-3">
                <div className="flex justify-between">
                    <p className="text-gray-600">Weight</p>
                    <p className="font-medium">10 g</p>
                </div>

                <div className="flex justify-between">
                    <p className="text-gray-600">Suitable For</p>
                    <p className="font-medium">all</p>
                </div>

                <div className="flex justify-between">
                    <p className="text-gray-600">Smell Intensity</p>
                    <p className="font-medium">mlo</p>
                </div>
            </main>
        </div>

    )
}

export default MoreInfoes
