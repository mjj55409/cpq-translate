package com.mertisconsulting.cpq.translate.model;

/**
 * Created by: michael
 * Date: 2/1/18
 **/
public class DoubleValue extends Value {

    public DoubleValue(Double value) {
        super(value);
    }

    public Double getValue() {
        return (Double) this.rawValue ;
    }
}
