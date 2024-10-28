    add $v0, $zero, $zero    # v0 = 0
    add $t0, $zero, $zero    # t0 = 0

.LOOP:
    slti $t1, $t0, 15        # compare t0 to 15
    beq $t1, $zero, EXIT     # if t0 >= 15, exit loop
    addi $t0, $t0, 1         # t0 = t0 + 1
    li $t2, 2                # t2 = 2
    mul $t3, $v0, $t2        # multiply v0 by 2 and store in t3
    addi $v0, $t3, 3         # v0 = t3 + 3
    j LOOP                   # jump back to the loop

EXIT:
    li $v0, 10               # syscall code for exit
    syscall                  # exit the program
