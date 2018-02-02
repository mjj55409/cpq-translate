package com.mertisconsulting.cpq.translate.model;

import java.util.HashMap;

/**
 * Created by: michael
 * Date: 2/1/18
 **/
public class CharacteristicValue extends ModelObject {
    private boolean isMultiValue = false;

    public CharacteristicValue() {
    }

    public CharacteristicValue(boolean isMultiValue) {
        this.isMultiValue = isMultiValue;
    }

}
