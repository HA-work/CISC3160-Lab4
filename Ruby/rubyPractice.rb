=begin

Sorting algorithms in Ruby


=end


# bubble sort


def bubbleSort(array)
    arrayLength = array.length
    if (arrayLength <= 1)
      return array 
    end
    # a way to break out for
    # trivially sorted arrays
  
    # ruby uses end to show the end
    # of blocks of code
  
  
    loop do
      # have a swapped so we can exit if already
      # sorted
      swapped = false
  
      for i in 0...(array.length - 1)
        # start at 0 
      
        if (array[i] > array[i+1])
          array[i], array[i+1] = array[i+1], array[i]
          # this is similiar to swapping in python
          swapped = true
        end
      end
  
      break if not swapped
      # if we did not swap anything we leave because
      # everything is in order
    end
  
    return array
  end
  
  testArray1 = [45,2,0,999,6, 88, 5]
  p bubbleSort(testArray1)
  
  
  
  
  
  
  # insertion sort
  
  def insertionSort(array)
      for i in 1...(array.length)
          j = i
          while j > 0
              if (array[j-1] > array[j])
                  temp = array[j]
                  array[j] = array[j-1]
                  array[j-1] = temp
              else
                  break
              end
              j = j - 1
          end
      end
      return array
  end
  
  
  testArray2 = [45,2,0,999,6, 88, 5]
  p insertionSort(testArray2)
  
  
  
  
  
  # selection sort
  
  def selectionSort(array)
    size = array.length - 1
    for i in 0...(array.length)
    
      min_index = i
      for j in (i + 1)..size
        if (array[j] < array[min_index])
          min_index = j 
        end
      end
      if (min_index != i)
        array[i], array[min_index] = array[min_index], array[i] 
      end
    end
    return array
  end
  
  testArray3 = [45,2,0,999,6, 88, 5]
  
  p selectionSort(testArray3)
  
  
  
  # output
  
=begin
  [0, 2, 5, 6, 45, 88, 999]
  [0, 2, 5, 6, 45, 88, 999]
  [0, 2, 5, 6, 45, 88, 999]
=end
  