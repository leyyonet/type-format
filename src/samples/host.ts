import {FuncLike} from "@leyyo/core";
import {ScalarTest, ScalarTestItem} from "@leyyo/scalar";
import {hostFormat} from "../index";

export function sampleHost(describe: FuncLike, it: FuncLike): void {
    const values: Array<[boolean, string]> = [
        //domain
        [true, "mydomain.com"],
        [true, "test.mydomain.com"],
        [true, "en.wikipedia.org"],
        [false, "28999"],
        [true, "abc"],
        [true, "3abc"],
        [false, "192.168.0.2000000000"],
        [false, "*hi*"],
        [false, "-hi-"],
        [false, "_domain"],
        [false, ":54:sda54"],
        //ipv4
        [true, "123.23.34.2"],
        [true, "172.26.168.134"],
        [true, "1.2.3.4"],
        [false, " 01.102.103.104  "],
        //ipv6
        [true, "2001:db8:3333:4444:5555:6666:1.2.3.4"],
        [true, "::11.22.33.44"],
        [true, "2001:db8::123.123.123.123"],
        [true, "::1234:5678:91.123.4.56"],
        [true, "::1234:5678:1.2.3.4"],
        [true, "2001:db8::1234:5678:5.6.7.8"],
        [false, ""],
        [true, "2001:0000:1234:0000:0000:C1C0:ABCD:0876"],
        [true, "2001:0:1234::C1C0:ABCD:876"],
        [true, "3ffe:0b00:0000:0000:0001:0000:0000:000a"],
        [true, "3ffe:b00::1:0:0:a"],
        [true, "FF02:0000:0000:0000:0000:0000:0000:0001"],
        [true, "FF02::1"],
        [true, "0000:0000:0000:0000:0000:0000:0000:0001"],
        [true, "0000:0000:0000:0000:0000:0000:0000:0000"],
        [true, "::"],
        [true, "::ffff:192.168.1.26"],
        [false, "02001:0000:1234:0000:0000:C1C0:ABCD:0876"],
        [false, "2001:0000:1234:0000:00001:C1C0:ABCD:0876"],
        [true, " 2001:0000:1234:0000:0000:C1C0:ABCD:0876"],
        [true, " 2001:0:1234::C1C0:ABCD:876"],
        [true, " 2001:0000:1234:0000:0000:C1C0:ABCD:0876  "],
        [true, " 2001:0:1234::C1C0:ABCD:876  "],
        [false, " 2001:0000:1234:0000:0000:C1C0:ABCD:0876  0"],
        [false, "2001:0000:1234: 0000:0000:C1C0:ABCD:0876"],
        [false, "2001:1:1:1:1:1:255Z255X255Y255"],
        [false, "3ffe:0b00:0000:0001:0000:0000:000a"],
        [false, "FF02:0000:0000:0000:0000:0000:0000:0000:0001"],
        [false, "3ffe:b00::1::a"],
        [false, "::1111:2222:3333:4444:5555:6666::"],
        [true, "2::10"],
        [true, "ff02::1"],
        [true, "fe80::"],
        [true, "2002::"],
        [true, "2001:db8::"],
        [true, "2001:0db8:1234::"],
        [true, "::ffff:0:0"],
        [true, "::ffff:192.168.1.1"],
        [true, "1:2:3:4:5:6:7:8"],
        [true, "1:2:3:4:5:6::8"],
        [true, "1:2:3:4:5::8"],
        [true, "1:2:3:4::8"],
        [true, "1:2:3::8"],
        [true, "1:2::8"],
        [true, "1::8"],
        [true, "1::2:3:4:5:6:7"],
        [true, "1::2:3:4:5:6"],
        [true, "1::2:3:4:5"],
        [true, "1::2:3:4"],
        [true, "1::2:3"],
        [true, "::2:3:4:5:6:7:8"],
        [true, "::2:3:4:5:6:7"],
        [true, "::2:3:4:5:6"],
        [true, "::2:3:4:5"],
        [true, "::2:3:4"],
        [true, "::2:3"],
        [true, "::8"],
        [true, "1:2:3:4:5:6::"],
        [true, "1:2:3:4:5::"],
        [true, "1:2:3:4::"],
        [true, "1:2:3::"],
        [true, "1:2::"],
        [true, "1::"],
        [true, "1:2:3:4:5::7:8"],
        [false, "1:2:3::4:5::7:8"],
        [false, "12345::6:7:8"],
        [true, "1:2:3:4::7:8"],
        [true, "1:2:3::7:8"],
        [true, "1:2::7:8"],
        [true, "1::7:8"],
        [true, "1:2:3:4:5:6:1.2.3.4"],
        [true, "1:2:3:4:5::1.2.3.4"],
        [true, "1:2:3:4::1.2.3.4"],
        [true, "1:2:3::1.2.3.4"],
        [true, "1:2::1.2.3.4"],
        [true, "1::1.2.3.4"],
        [true, "1:2:3:4::5:1.2.3.4"],
        [true, "1:2:3::5:1.2.3.4"],
        [true, "1:2::5:1.2.3.4"],
        [true, "1::5:1.2.3.4"],
        [true, "1::5:11.22.33.44"],
        [false, "1::5:400.2.3.4"],
        [false, "1::5:260.2.3.4"],
        [false, "1::5:256.2.3.4"],
        [false, "1::5:1.256.3.4"],
        [false, "1::5:1.2.256.4"],
        [false, "1::5:1.2.3.256"],
        [false, "1::5:300.2.3.4"],
        [false, "1::5:1.300.3.4"],
        [false, "1::5:1.2.300.4"],
        [false, "1::5:1.2.3.300"],
        [false, "1::5:900.2.3.4"],
        [false, "1::5:1.900.3.4"],
        [false, "1::5:1.2.900.4"],
        [false, "1::5:1.2.3.900"],
        [false, "1::5:300.300.300.300"],
        [false, "1::5:3000.30.30.30"],
        [false, "1::400.2.3.4"],
        [false, "1::260.2.3.4"],
        [false, "1::256.2.3.4"],
        [false, "1::1.256.3.4"],
        [false, "1::1.2.256.4"],
        [false, "1::1.2.3.256"],
        [false, "1::300.2.3.4"],
        [false, "1::1.300.3.4"],
        [false, "1::1.2.300.4"],
        [false, "1::1.2.3.300"],
        [false, "1::900.2.3.4"],
        [false, "1::1.900.3.4"],
        [false, "1::1.2.900.4"],
        [false, "1::1.2.3.900"],
        [false, "1::300.300.300.300"],
        [false, "1::3000.30.30.30"],
        [false, "::400.2.3.4"],
        [false, "::260.2.3.4"],
        [false, "::256.2.3.4"],
        [false, "::1.256.3.4"],
        [false, "::1.2.256.4"],
        [false, "::1.2.3.256"],
        [false, "::300.2.3.4"],
        [false, "::1.300.3.4"],
        [false, "::1.2.300.4"],
        [false, "::1.2.3.300"],
        [false, "::900.2.3.4"],
        [false, "::1.900.3.4"],
        [false, "::1.2.900.4"],
        [false, "::1.2.3.900"],
        [false, "::300.300.300.300"],
        [false, "::3000.30.30.30"],
        [true, "fe80::217:f2ff:254.7.237.98"],
        [true, "fe80::217:f2ff:fe07:ed62"],
        [true, "2001:DB8:0:0:8:800:200C:417A"],
        [true, "FF01:0:0:0:0:0:0:101"],
        [true, "FF01::101"],
        [true, "0:0:0:0:0:0:0:1"],
        [true, "0:0:0:0:0:0:0:0"],
        [true, "2001:2:3:4:5:6:7:134"],
        [true, "fe80::4413:c8ae:2821:5852%10"],
        [true, "1111:2222:3333:4444:5555:6666:7777:8888"],
        [true, "1111:2222:3333:4444:5555:6666:7777::"],
        [true, "1111:2222:3333:4444:5555:6666::"],
        [true, "1111:2222:3333:4444:5555::"],
        [true, "1111:2222:3333:4444::"],
        [true, "1111:2222:3333::"],
        [true, "1111:2222::"],
        [true, "1111::"],
        [true, "1111:2222:3333:4444:5555:6666::8888"],
        [true, "1111:2222:3333:4444:5555::8888"],
        [true, "1111:2222:3333:4444::8888"],
        [true, "1111:2222:3333::8888"],
        [true, "1111:2222::8888"],
        [true, "1111::8888"],
        [true, "::8888"],
        [true, "1111:2222:3333:4444:5555::7777:8888"],
        [true, "1111:2222:3333:4444::7777:8888"],
        [true, "1111:2222:3333::7777:8888"],
        [true, "1111:2222::7777:8888"],
        [true, "1111::7777:8888"],
        [true, "::7777:8888"],
        [true, "1111:2222:3333:4444::6666:7777:8888"],
        [true, "1111:2222:3333::6666:7777:8888"],
        [true, "1111:2222::6666:7777:8888"],
        [true, "1111::6666:7777:8888"],
        [true, "::6666:7777:8888"],
        [true, "1111:2222:3333::5555:6666:7777:8888"],
        [true, "1111:2222::5555:6666:7777:8888"],
        [true, "1111::5555:6666:7777:8888"],
        [true, "::5555:6666:7777:8888"],
        [true, "1111:2222::4444:5555:6666:7777:8888"],
        [true, "1111::4444:5555:6666:7777:8888"],
        [true, "::4444:5555:6666:7777:8888"],
        [true, "1111::3333:4444:5555:6666:7777:8888"],
        [true, "::3333:4444:5555:6666:7777:8888"],
        [true, "::2222:3333:4444:5555:6666:7777:8888"],
        [true, "1111:2222:3333:4444:5555:6666:123.123.123.123"],
        [true, "1111:2222:3333:4444:5555::123.123.123.123"],
        [true, "1111:2222:3333:4444::123.123.123.123"],
        [true, "1111:2222:3333::123.123.123.123"],
        [true, "1111:2222::123.123.123.123"],
        [true, "1111::123.123.123.123"],
        [true, "::123.123.123.123"],
        [true, "1111:2222:3333:4444::6666:123.123.123.123"],
        [true, "1111:2222:3333::6666:123.123.123.123"],
        [true, "1111:2222::6666:123.123.123.123"],
        [true, "1111::6666:123.123.123.123"],
        [true, "::6666:123.123.123.123"],
        [true, "1111:2222:3333::5555:6666:123.123.123.123"],
        [true, "1111:2222::5555:6666:123.123.123.123"],
        [true, "1111::5555:6666:123.123.123.123"],
        [true, "::5555:6666:123.123.123.123"],
        [true, "1111:2222::4444:5555:6666:123.123.123.123"],
        [true, "1111::4444:5555:6666:123.123.123.123"],
        [true, "::4444:5555:6666:123.123.123.123"],
        [true, "1111::3333:4444:5555:6666:123.123.123.123"],
        [true, "::3333:4444:5555:6666:123.123.123.123"],
        [true, "::2222:3333:4444:5555:6666:123.123.123.123"],
        // Invalid data
        [false, "XXXX:XXXX:XXXX:XXXX:XXXX:XXXX:XXXX:XXXX"],
        // To much components
        [false, "1111:2222:3333:4444:5555:6666:7777:8888:9999"],
        [false, "1111:2222:3333:4444:5555:6666:7777:8888::"],
        [false, "::2222:3333:4444:5555:6666:7777:8888:9999"],
        // To less components
        [false, "1111:2222:3333:4444:5555:6666:7777"],
        [false, "1111:2222:3333:4444:5555:6666"],
        [false, "1111:2222:3333:4444:5555"],
        [false, "1111:2222:3333:4444"],
        [false, "1111:2222:3333"],
        [false, "1111:2222"],
        [false, "1111"],
        // Missing :
        [false, "11112222:3333:4444:5555:6666:7777:8888"],
        [false, "1111:22223333:4444:5555:6666:7777:8888"],
        [false, "1111:2222:33334444:5555:6666:7777:8888"],
        [false, "1111:2222:3333:44445555:6666:7777:8888"],
        [false, "1111:2222:3333:4444:55556666:7777:8888"],
        [false, "1111:2222:3333:4444:5555:66667777:8888"],
        [false, "1111:2222:3333:4444:5555:6666:77778888"],
        // Missing : intended for ::
        [false, "1111:2222:3333:4444:5555:6666:7777:8888:"],
        [false, "1111:2222:3333:4444:5555:6666:7777:"],
        [false, "1111:2222:3333:4444:5555:6666:"],
        [false, "1111:2222:3333:4444:5555:"],
        [false, "1111:2222:3333:4444:"],
        [false, "1111:2222:3333:"],
        [false, "1111:2222:"],
        [false, "1111:"],
        [false, ":"],
        [false, ":8888"],
        [false, ":7777:8888"],
        [false, ":6666:7777:8888"],
        [false, ":5555:6666:7777:8888"],
        [false, ":4444:5555:6666:7777:8888"],
        [false, ":3333:4444:5555:6666:7777:8888"],
        [false, ":2222:3333:4444:5555:6666:7777:8888"],
        [false, ":1111:2222:3333:4444:5555:6666:7777:8888"],
        // :::
        [false, ":::2222:3333:4444:5555:6666:7777:8888"],
        [false, "1111:::3333:4444:5555:6666:7777:8888"],
        [false, "1111:2222:::4444:5555:6666:7777:8888"],
        [false, "1111:2222:3333:::5555:6666:7777:8888"],
        [false, "1111:2222:3333:4444:::6666:7777:8888"],
        [false, "1111:2222:3333:4444:5555:::7777:8888"],
        [false, "1111:2222:3333:4444:5555:6666:::8888"],
        [false, "1111:2222:3333:4444:5555:6666:7777:::"],
        // Double ::
        [false, "::2222::4444:5555:6666:7777:8888"],
        [false, "::2222:3333::5555:6666:7777:8888"],
        [false, "::2222:3333:4444::6666:7777:8888"],
        [false, "::2222:3333:4444:5555::7777:8888"],
        [false, "::2222:3333:4444:5555:7777::8888"],
        [false, "::2222:3333:4444:5555:7777:8888::"],
        [false, "1111::3333::5555:6666:7777:8888"],
        [false, "1111::3333:4444::6666:7777:8888"],
        [false, "1111::3333:4444:5555::7777:8888"],
        [false, "1111::3333:4444:5555:6666::8888"],
        [false, "1111::3333:4444:5555:6666:7777::"],
        [false, "1111:2222::4444::6666:7777:8888"],
        [false, "1111:2222::4444:5555::7777:8888"],
        [false, "1111:2222::4444:5555:6666::8888"],
        [false, "1111:2222::4444:5555:6666:7777::"],
        [false, "1111:2222:3333::5555::7777:8888"],
        [false, "1111:2222:3333::5555:6666::8888"],
        [false, "1111:2222:3333::5555:6666:7777::"],
        [false, "1111:2222:3333:4444::6666::8888"],
        [false, "1111:2222:3333:4444::6666:7777::"],
        [false, "1111:2222:3333:4444:5555::7777::"],
        [false, "XXXX:XXXX:XXXX:XXXX:XXXX:XXXX:1.2.3.4"],
        [false, "1111:2222:3333:4444:5555:6666:256.256.256.256"],
        [false, "1111:2222:3333:4444:5555:6666:000.000.000.000"],
        [false, "1111:2222:3333:4444:5555:6666:00.00.00.00"],
        [false, "1111:2222:3333:4444:5555:6666:7777:8888:1.2.3.4"],
        [false, "1111:2222:3333:4444:5555:6666:7777:1.2.3.4"],
        [false, "1111:2222:3333:4444:5555:6666::1.2.3.4"],
        [false, "::2222:3333:4444:5555:6666:7777:1.2.3.4"],
        [false, "1111:2222:3333:4444:5555:6666:1.2.3.4.5"],
        [false, "1111:2222:3333:4444:5555:1.2.3.4"],
        [false, "1111:2222:3333:4444:1.2.3.4"],
        [false, "1111:2222:3333:1.2.3.4"],
        [false, "1111:2222:1.2.3.4"],
        [false, "1111:1.2.3.4"],
        [false, "11112222:3333:4444:5555:6666:1.2.3.4"],
        [false, "1111:22223333:4444:5555:6666:1.2.3.4"],
        [false, "1111:2222:33334444:5555:6666:1.2.3.4"],
        [false, "1111:2222:3333:44445555:6666:1.2.3.4"],
        [false, "1111:2222:3333:4444:55556666:1.2.3.4"],
        [false, "1111:2222:3333:4444:5555:66661.2.3.4"],
        // Missing .
        [false, "1111:2222:3333:4444:5555:6666:255255.255.255"],
        [false, "1111:2222:3333:4444:5555:6666:255.255255.255"],
        [false, "1111:2222:3333:4444:5555:6666:255.255.255255"],
        [false, ":1.2.3.4"],
        [false, ":6666:1.2.3.4"],
        [false, ":5555:6666:1.2.3.4"],
        [false, ":4444:5555:6666:1.2.3.4"],
        [false, ":3333:4444:5555:6666:1.2.3.4"],
        [false, ":2222:3333:4444:5555:6666:1.2.3.4"],
        [false, ":1111:2222:3333:4444:5555:6666:1.2.3.4"],
        [false, ":::2222:3333:4444:5555:6666:1.2.3.4"],
        [false, "1111:::3333:4444:5555:6666:1.2.3.4"],
        [false, "1111:2222:::4444:5555:6666:1.2.3.4"],
        [false, "1111:2222:3333:::5555:6666:1.2.3.4"],
        [false, "1111:2222:3333:4444:::6666:1.2.3.4"],
        [false, "1111:2222:3333:4444:5555:::1.2.3.4"],
        [false, "::2222::4444:5555:6666:1.2.3.4"],
        [false, "::2222:3333::5555:6666:1.2.3.4"],
        [false, "::2222:3333:4444::6666:1.2.3.4"],
        [false, "::2222:3333:4444:5555::1.2.3.4"],
        [false, "1111::3333::5555:6666:1.2.3.4"],
        [false, "1111::3333:4444::6666:1.2.3.4"],
        [false, "1111::3333:4444:5555::1.2.3.4"],
        [false, "1111:2222::4444::6666:1.2.3.4"],
        [false, "1111:2222::4444:5555::1.2.3.4"],
        [false, "1111:2222:3333::5555::1.2.3.4"],
        // Missing parts [false, "::."],
        [false, "::.."],
        [false, "::..."],
        [false, "::1..."],
        [false, "::1.2.."],
        [false, "::1.2.3."],
        [false, "::.2.."],
        [false, "::.2.3."],
        [false, "::.2.3.4"],
        [false, "::..3."],
        [false, "::..3.4"],
        [false, "::...4"],
        // Extra : in front
        [false, ":1111:2222:3333:4444:5555:6666:7777::"],
        [false, ":1111:2222:3333:4444:5555:6666::"],
        [false, ":1111:2222:3333:4444:5555::"],
        [false, ":1111:2222:3333:4444::"],
        [false, ":1111:2222:3333::"],
        [false, ":1111:2222::"],
        [false, ":1111::"],
        [false, ":::"],
        [false, ":1111:2222:3333:4444:5555:6666::8888"],
        [false, ":1111:2222:3333:4444:5555::8888"],
        [false, ":1111:2222:3333:4444::8888"],
        [false, ":1111:2222:3333::8888"],
        [false, ":1111:2222::8888"],
        [false, ":1111::8888"],
        [false, ":::8888"],
        [false, ":1111:2222:3333:4444:5555::7777:8888"],
        [false, ":1111:2222:3333:4444::7777:8888"],
        [false, ":1111:2222:3333::7777:8888"],
        [false, ":1111:2222::7777:8888"],
        [false, ":1111::7777:8888"],
        [false, ":::7777:8888"],
        [false, ":1111:2222:3333:4444::6666:7777:8888"],
        [false, ":1111:2222:3333::6666:7777:8888"],
        [false, ":1111:2222::6666:7777:8888"],
        [false, ":1111::6666:7777:8888"],
        [false, ":::6666:7777:8888"],
        [false, ":1111:2222:3333::5555:6666:7777:8888"],
        [false, ":1111:2222::5555:6666:7777:8888"],
        [false, ":1111::5555:6666:7777:8888"],
        [false, ":::5555:6666:7777:8888"],
        [false, ":1111:2222::4444:5555:6666:7777:8888"],
        [false, ":1111::4444:5555:6666:7777:8888"],
        [false, ":::4444:5555:6666:7777:8888"],
        [false, ":1111::3333:4444:5555:6666:7777:8888"],
        [false, ":::3333:4444:5555:6666:7777:8888"],
        [false, ":1111:2222:3333:4444:5555::1.2.3.4"],
        [false, ":1111:2222:3333:4444::1.2.3.4"],
        [false, ":1111:2222:3333::1.2.3.4"],
        [false, ":1111:2222::1.2.3.4"],
        [false, ":1111::1.2.3.4"],
        [false, ":::1.2.3.4"],
        [false, ":1111:2222:3333:4444::6666:1.2.3.4"],
        [false, ":1111:2222:3333::6666:1.2.3.4"],
        [false, ":1111:2222::6666:1.2.3.4"],
        [false, ":1111::6666:1.2.3.4"],
        [false, ":::6666:1.2.3.4"],
        [false, ":1111:2222:3333::5555:6666:1.2.3.4"],
        [false, ":1111:2222::5555:6666:1.2.3.4"],
        [false, ":1111::5555:6666:1.2.3.4"],
        [false, ":::5555:6666:1.2.3.4"],
        [false, ":1111:2222::4444:5555:6666:1.2.3.4"],
        [false, ":1111::4444:5555:6666:1.2.3.4"],
        [false, ":::4444:5555:6666:1.2.3.4"],
        [false, ":1111::3333:4444:5555:6666:1.2.3.4"],
        [false, ":::3333:4444:5555:6666:1.2.3.4"],
        // Extra : at end,
        [false, "1111:2222:3333:4444:5555:6666:::"],
        [false, "1111:2222:3333:4444:5555:::"],
        [false, "1111:2222:3333:4444:::"],
        [false, "1111:2222:3333:::"],
        [false, "1111:2222:::"],
        [false, "1111:::"],
        [false, "1111:2222:3333:4444:5555:6666::8888:"],
        [false, "1111:2222:3333:4444:5555::8888:"],
        [false, "1111:2222:3333:4444::8888:"],
        [false, "1111:2222:3333::8888:"],
        [false, "1111:2222::8888:"],
        [false, "1111::8888:"],
        [false, "::8888:"],
        [false, "1111:2222:3333:4444:5555::7777:8888:"],
        [false, "1111:2222:3333:4444::7777:8888:"],
        [false, "1111:2222:3333::7777:8888:"],
        [false, "1111:2222::7777:8888:"],
        [false, "1111::7777:8888:"],
        [false, "::7777:8888:"],
        [false, "1111:2222:3333:4444::6666:7777:8888:"],
        [false, "1111:2222:3333::6666:7777:8888:"],
        [false, "1111:2222::6666:7777:8888:"],
        [false, "1111::6666:7777:8888:"],
        [false, "::6666:7777:8888:"],
        [false, "1111:2222:3333::5555:6666:7777:8888:"],
        [false, "1111:2222::5555:6666:7777:8888:"],
        [false, "1111::5555:6666:7777:8888:"],
        [false, "::5555:6666:7777:8888:"],
        [false, "1111:2222::4444:5555:6666:7777:8888:"],
        [false, "1111::4444:5555:6666:7777:8888:"],
        [false, "::4444:5555:6666:7777:8888:"],
        [false, "1111::3333:4444:5555:6666:7777:8888:"],
        [false, "::3333:4444:5555:6666:7777:8888:"],
        [false, "::2222:3333:4444:5555:6666:7777:8888:"],
        [false, ""],     // empty string
        [true, "::1"], // loopback, compressed, non-routable
        [true, "::"], // unspecified, compressed, non-routable
        [true, "0:0:0:0:0:0:0:1"], // loopback, full
        [true, "0:0:0:0:0:0:0:0"], // unspecified, full
        [true, "2001:DB8:0:0:8:800:200C:417A"], // unicast, full
        [true, "FF01:0:0:0:0:0:0:101"], // multicast, full
        [true, "2001:DB8::8:800:200C:417A"], // unicast, compressed
        [true, "FF01::101"], // multicast, compressed
        [false, "2001:DB8:0:0:8:800:200C:417A:221"], // unicast, full
        [false, "FF01::101::2"], // multicast, compressed
        [false, "02001:0000:1234:0000:0000:C1C0:ABCD:0876"],
        // extra 0 not allowed!
        [false, "2001:0000:1234:0000:00001:C1C0:ABCD:0876"],
        [true," 2001:0000:1234:0000:0000:C1C0:ABCD:0876"],
        // leading space
        [true,"2001:0000:1234:0000:0000:C1C0:ABCD:0876"],
        // trailing space
        [true," 2001:0000:1234:0000:0000:C1C0:ABCD:0876  "],
        // leading and trailing space
        [false, "2001:0000:1234:0000:0000:C1C0:ABCD:0876  0"],
        // junk after valid address
        [false, "2001:0000:1234: 0000:0000:C1C0:ABCD:0876"],
        // internal space
        [false, "3ffe:0b00:0000:0001:0000:0000:000a"],
        // seven segments
        [false, "FF02:0000:0000:0000:0000:0000:0000:0000:0001"],
        // nine segments
        [false, "3ffe:b00::1::a"],

        // double "::"
        [false, "::1111:2222:3333:4444:5555:6666::"],
        [true, "::1"],
        [false, "1:2:3::4:5::7:8"],
        // Double "::"
        // IPv4 addresses as dotted-quads
        [false, "2001:1:1:1:1:1:255Z255X255Y255"], // garbage instead of "." in IPv4
        [false, "::ffff:192x168.1.26"],
        // ditto [true, "::ffff:192.168.1.1"],
        [true, "0:0:0:0:0:0:13.1.68.3"], // IPv4-compatible IPv6 address, full, deprecated
        [true, "0:0:0:0:0:FFFF:129.144.52.38"], // IPv4-mapped IPv6 address, full
        [true, "::13.1.68.3"], // IPv4-compatible IPv6 address, compressed, deprecated
        [true, "::FFFF:129.144.52.38"], // IPv4-mapped IPv6 address, compressed
        [true, "fe80:0:0:0:204:61ff:254.157.241.86"],
        [true, "fe80::204:61ff:254.157.241.86"],
        [true, "::ffff:12.34.56.78"],
        [false, "::ffff:2.3.4"],
        [false, "::ffff:257.1.2.3"],
        [false, "1.2.3.4:1111:2222:3333:4444::5555"], // Aeron
        [false, "1.2.3.4:1111:2222:3333::5555"],
        [false, "1.2.3.4:1111:2222::5555"],
        [false, "1.2.3.4:1111::5555"],
        [false, "1.2.3.4::5555"],
        [false, "1.2.3.4::"],
        // Testing IPv4 addresses represented as dotted-quads
        // Leading zero's in IPv4 addresses not allowed: some systems treat the leading "0" in ".086" as the start of an octal number
        // Update: The BNF in RFC-3986 explicitly defines the dec-octet (for IPv4 addresses) not to have a leading zero [false, "fe80:0000:0000:0000:0204:61ff:254.157.241.086"],
        [true, "::ffff:192.0.2.128"], // but this is OK, since there's a single digit
        // Not testing address with subnet mask
        // [true,"2001:0DB8:0000:CD30:0000:0000:0000:0000/60"],
        // full, with prefix
        // [true,"2001:0DB8::CD30:0:0:0:0/60"],
        // compressed, with prefix
        // [true,"2001:0DB8:0:CD30::/60"],
        // compressed, with prefix
        //2
        // [true,"::/128"],
        // compressed, unspecified address type, non-routable
        // [true,"::1/128"],
        // compressed, loopback address type, non-routable
        // [true,"FF00::/8"],
        // compressed, multicast address type
        // [true,"FE80::/10"],
        // compressed, link-local unicast, non-routable
        // [true,"FEC0::/10"],
        // compressed, site-local unicast, deprecated
        // [false,"124.15.6.89/60"],
        // standard IPv4, prefix not allowed
        [true, "fe80:0000:0000:0000:0204:61ff:fe9d:f156"],
        [true, "fe80:0:0:0:204:61ff:fe9d:f156"],
        [true, "fe80::204:61ff:fe9d:f156"],
        [true, "fe80::1"],
        [true, "::ffff:c000:280"],
        // Aeron supplied these test cases
        [false, "1111:2222:3333:4444::5555:"],
        [false, "1111:2222:3333::5555:"],
        [false, "1111:2222::5555:"],
        [false, "1111::5555:"],
        [false, "::5555:"],
        [false, ":1111:2222:3333:4444::5555"],
        [false, ":1111:2222:3333::5555"],
        [false, ":1111:2222::5555"],
        [false, ":1111::5555"],
        [false, ":::5555"],
        // Additional test cases
        // from http://rt.cpan.org/Public/Bug/Display.html?id=50693
        [true, "2001:0db8:85a3:0000:0000:8a2e:0370:7334"],
        [true, "2001:db8:85a3:0:0:8a2e:370:7334"],
        [true, "2001:db8:85a3::8a2e:370:7334"],
        [true, "2001:0db8:0000:0000:0000:0000:1428:57ab"],
        [true, "2001:0db8:0000:0000:0000::1428:57ab"],
        [true, "2001:0db8:0:0:0:0:1428:57ab"],
        [true, "2001:0db8:0:0::1428:57ab"],
        [true, "2001:0db8::1428:57ab"],
        [true, "2001:db8::1428:57ab"],
        [true, "::ffff:0c22:384e"],
        [true, "2001:0db8:1234:0000:0000:0000:0000:0000"],
        [true, "2001:0db8:1234:ffff:ffff:ffff:ffff:ffff"],
        [true, "2001:db8:a::123"],
        [false, "123"],
        [true, "ldkfj"], //valid domain name
        [false, "2001::FFD3::57ab"],
        [false, "2001:db8:85a3::8a2e:37023:7334"],
        [false, "2001:db8:85a3::8a2e:370k:7334"],
        [false, "1:2:3:4:5:6:7:8:9"],
        [false, "1::2::3"],
        [false, "1:::3:4:5"],
        [false, "1:2:3::4:5:6:7:8:9"],
        // New from Aeron
        // Playing with combinations of "0" and "::"
        // NB: these are all sytactically correct, but are bad form
        // because "0" adjacent to "::" should be combined into "::"
        [true, "::0:0:0:0:0:0:0"],
        [true, "::0:0:0:0:0:0"],
        [true, "::0:0:0:0:0"],
        [true, "::0:0:0:0"],
        [true, "::0:0:0"],
        [true, "::0:0"],
        [true, "::0"],
        [true, "0:0:0:0:0:0:0::"],
        [true, "0:0:0:0:0:0::"],
        [true, "0:0:0:0:0::"],
        [true, "0:0:0:0::"],
        [true, "0:0:0::"],
        [true, "0:0::"],
        [true, "0::"],

        // Double ::"
        // Too many components"
        [false, "::."],
        // Extra : at end
        // Additional cases: http://crisp.tweakblogs.net/blog/2031/ipv6-validation-%28and-caveats%29.html
        [true, "0:a:b:c:d:e:f::"],
        [true, "::0:a:b:c:d:e:f"],
        // syntactically correct, but bad form (::0:... could be combined)
        [true, "a:b:c:d:e:f:0::"],
        [false, ":10.0.0.1"]

    ];
    const items: Array<ScalarTestItem> = [];
    values.forEach(value => {
        items.push({
            info: value[1],
            type: 'basic',
            is: true,
            input: value[1],
            expected: value[0],
        });
    })
    ScalarTest.run({describe, it, cast: hostFormat, native: Boolean, items});
}