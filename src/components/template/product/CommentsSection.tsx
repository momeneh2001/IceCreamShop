import React from 'react'
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'

function CommentsSection() {
    return (
        <div className="mt-4 p-4 border rounded-lg bg-white shadow-sm">
            <p className="text-lg font-medium mb-2">
                Reviews (3):
            </p>
            <hr className="border-gray-300 mb-4" />

            <div className="flex flex-col md:flex-row gap-6">
                {/* User Comments */}
                <div className="flex-1 space-y-4">
                    <p className="text-gray-700 font-medium">
                        Classic Vanilla Ice Cream with a Rich, Creamy Flavor
                    </p>

                    <div className="space-y-4 max-h-[612px] overflow-y-auto">
                        <CommentItem/>
                        <CommentItem/>
                        <CommentItem/>

                    </div>
                </div>

                {/* Comment Form */}
                <div className="flex-1 bg-gray-50 p-4 rounded-lg shadow-inner">
                    <CommentForm />
                </div>
            </div>
        </div>
    )
}

export default CommentsSection
