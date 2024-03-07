import { updateUser } from "../../lib/user";

export default async function addprofile(req, res) {
  try {
    console.log("addprofile")
    await updateUser(req.body);
    res.status(200).send({ done: true });
  } catch (error) {
    console.error(error);
    res.status(500).end(error.message);
  }
}
