
package com.mertisconsulting.cpq.translate;

import org.junit.Test;
import static org.junit.Assert.*;

public class AppTest {

    @Test public void testAppHasVersion() {
        App classUnderTest = new App();
        assertNotNull("app should have a version", classUnderTest.getVersion());
    }
}
