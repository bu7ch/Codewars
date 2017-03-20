def high_and_low(numbers)
   numbers_array = numbers.split(" ").map{|n| n.to_i}
   numbers_array.max.to_s + " " + numbers_array.min.to_s
end
