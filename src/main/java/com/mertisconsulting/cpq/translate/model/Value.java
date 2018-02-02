package com.mertisconsulting.cpq.translate.model;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by: michael
 * Date: 2/1/18
 **/
abstract public class Value {
    protected final Object rawValue;


    public Value(Object value) {
        this.rawValue = value;
    }

    abstract public Object getValue();

}
