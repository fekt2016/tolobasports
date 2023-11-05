import { useMutation, useQueryClient } from "react-query";
import { createSub as subApi } from "../../services/apiSubscriber";
import { toast } from "react-toastify";

export function useCreateSub() {
	const queryClient = useQueryClient();

	const { mutate: subscribers, isLoading: isCreating } = useMutation({
		mutationFn: (newBuy) => subApi(newBuy),
		onSuccess: () => {
			toast.success("Thank You for the subcription");
			queryClient.invalidateQueries({
				queryKey: ["subscriber"],
			});
		},

		onError: (err) => toast.error(err.message),
	});

	return { subscribers, isCreating };
}
