import supabase from "./supabase";

export async function createSub(newBuy) {
	const { data, error } = await supabase.from("subscribers").insert([newBuy]);

	if (error) {
		console.error(error);
		throw new Error("check your credentials");
	}

	return data;
}
