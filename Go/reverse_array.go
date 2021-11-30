package main
import "fmt"

func reverse_array(arr []int) []int {
	var arr_length = len(arr)
	var return_value = []int{}
	for i := arr_length; i > 0; i-- {
		return_value = append(return_value, arr[i-1])
	}
	return return_value
}

func main(){
	var arr = []int{1,2,3,4}
	fmt.Println(reverse_array(arr))

}