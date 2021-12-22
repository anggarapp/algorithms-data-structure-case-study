import csv


def string_byte_int(value, length):
    byte_value = bytearray(value, 'utf-8')
    out = byte_value.copy()
    out[length:] = [0 for _ in range(length - len(value))]
    integer_value = int.from_bytes(out, "big")
    return integer_value


def interpolate(head_value, tail_value, target_value, head, tail):
    maxlength = max(len(head_value), len(tail_value), len(target_value))
    head_value_int = string_byte_int(head_value, maxlength)
    tail_value_int = string_byte_int(tail_value, maxlength)
    target_value_int = string_byte_int(target_value, maxlength)
    print("--head--")
    print(head_value_int)
    print(tail_value_int)
    print(target_value_int)
    print("--tail--")

    value_count = tail-head
    diff_value = tail_value_int-head_value_int
    if (diff_value == 0):
        return 0
    # return int((head+((target_value_int-head_value_int)//(tail_value_int-head_value_int)))*(tail-head))
    return int(((target_value_int-head_value_int)*value_count)/(diff_value))


def compareTo(self, that):
    return ((self > that) - (self < that))


def search(data, word):
    head = 0
    tail = len(data)-1
    word = word.lower()
    while (compareTo(word, data[head]) >= 0 and compareTo(word, data[tail]) <= 0):
        midle = head + interpolate(data[head], data[tail], word, head, tail)
        print(midle)
        compare = compareTo(word, data[midle])

        if (compare < 0):
            tail = midle-1
        elif(compare > 0):
            head = midle+1
        else:
            return midle
    return -1


def get_data(filename):
    words = []
    with open(filename) as data:
        csv_reader = csv.reader(data, delimiter=';')
        column = 0
        for row in csv_reader:
            if (column == 0):
                column = column + 1
                continue
            else:
                words.append(row[2].lower())
    return words


data_kata_baku = get_data('Kata_Baku.csv')

while(True):
    data = data_kata_baku
    word = str(input("Masukan Kata: "))
    result = search(data, word)
    if (result == -1):
        print("Tidak ada Kata "+word+" didalam database")
    else:
        print("Kata "+str(word)+" ada dalam database di nomor "+str(result+1))

    choice = str(input("Ingin Mencoba Lagi?(Y/N): "))
    choice = choice.lower()
    if (choice == "n"):
        break
