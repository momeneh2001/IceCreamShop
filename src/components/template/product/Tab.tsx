"use client";
import React, { useState } from 'react'
import MoreInfoes from './MoreInfoes';
import CommentsSection from './CommentsSection';
import Description from './Description';

function Tab() {
    const [tab, setTab] = useState("description");
    return (
        <div className="mt-12 w-full border-b">
            {/* Tabs header */}
            <ul className="flex gap-8 border-b  border-gray-300">
                <li>
                    <button
                        onClick={() => setTab("description")}
                        className={`pb-3 text-sm font-medium transition
                ${tab === "description"
                                ? "border-b-2 border-red-600 text-red-600"
                                : "text-gray-500 hover:text-black"
                            }`}
                    >
                        Description
                    </button>
                </li>

                <li>
                    <button
                        onClick={() => setTab("moreInfoes")}
                        className={`pb-3 text-sm font-medium transition
                ${tab === "moreInfoes"
                                ? "border-b-2 border-red-600 text-red-600"
                                : "text-gray-500 hover:text-black"
                            }`}
                    >
                        Additional Information
                    </button>
                </li>

                <li>
                    <button
                        onClick={() => setTab("comments")}
                        className={`pb-3 text-sm font-medium transition
                ${tab === "comments"
                                ? "border-b-2 border-red-600 text-red-600"
                                : "text-gray-500 hover:text-black"
                            }`}
                    >
                        Reviews
                        (3)
                    </button>
                </li>
            </ul>
            {/* Tabs content */}
            <div className="my-8">
                <div>
                    {tab === "description" &&(<Description/>)}

                    {tab === "moreInfoes" && (
                        <MoreInfoes />
                    )}

                    {tab === "comments" && (
                        <CommentsSection />
                    )}
                </div>
            </div>
        </div>

    )
}

export default Tab 