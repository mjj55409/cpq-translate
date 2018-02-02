package com.mertisconsulting.cpq.translate.model;

/**
 * Created by: michael
 * Date: 2/1/18
 **/
public class StringValue extends Value {

    public StringValue(String value) {
        super(value);
    }

    public String getValue() {
        return (String)this.rawValue ;
    }
}
