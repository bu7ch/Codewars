def goto(level, button)
  return 0 unless level.is_a?(Fixnum) && button.is_a?(String)
  button = button.to_i
  return 0 unless (0..3).include?(level) && (0..3).include?(button)
  button - level
end
