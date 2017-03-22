def initials name
  name = name.split ' '
  name.each_with_index.map{|w, i|
    i == name.length - 1 ? w.capitalize : "#{w[0].upcase}."
  }.join ''
end
