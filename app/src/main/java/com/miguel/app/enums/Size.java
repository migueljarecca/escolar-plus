package com.miguel.app.enums;

public enum Size {
    NUM_6(6),
    NUM_8(8),
    NUM_10(10),
    NUM_12(12),
    S(null),
    M(null),
    L(null),
    XL(null);

    private final Integer valorNumerico; // Usa Integer para permitir nulls

    // Constructor privado que permite la inicialización del valor numérico
    Size(Integer valorNumerico) {
        this.valorNumerico = valorNumerico;
    }

    // Getter público para el valor numérico
    public Integer getValorNumerico() {
        return valorNumerico;
    }
}
