import { Schema, model, models } from "mongoose";
import User from "../models/User";

const commentSchema = Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		rating: {
			type: Number,
			required: [true, "Rating is required."],
			max: [5, "Maximum rate is 5."],
		},
		comment: {
			type: String,
			required: [true, "Comment text is required."],
		},
	},
	{
		timestamps: true,
	}
);

const Comment = models.Comment || model("Comment", commentSchema);

export default Comment;
