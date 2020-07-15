import { Schema, model, Document } from "mongoose"

export interface UserInterface extends Document {
  email?: string
  firstName?: string
  lastName?: string
  fullName(): string
}

const UserSchema = new Schema<UserInterface>(
  {
    email: {
      type: String
    },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

UserSchema.methods.fullName = ():string => this.firstName + " " + this.lastName

export default model<UserInterface>("User", UserSchema)
