Search.setIndex({envversion:46,filenames:["background/index","capi/header","capi/index","capi/misc","capi/nvm_addr","capi/nvm_bbt","capi/nvm_be","capi/nvm_bounds","capi/nvm_buf","capi/nvm_cmd","capi/nvm_dev","capi/nvm_geo","capi/nvm_meta","capi/nvm_mode","capi/nvm_pmode","capi/nvm_ret","capi/nvm_vblk","capi/nvm_ver","cli/index","cli/nvm_addr","cli/nvm_bbt","cli/nvm_dev","cli/nvm_env","cli/nvm_lba","cli/nvm_vblk","index","prereqs/index","prereqs/ocssd","prereqs/os","prereqs/tools","quick_start/index","refs/index","tutorial/index","tutorial/nvm_addr","tutorial/nvm_addr_vio","tutorial/nvm_bbt","tutorial/nvm_dev","tutorial/nvm_vblk"],objects:{"":{"1":[9,0,1,"c.1"],"7":[4,0,1,"c.7"],"nvm_addr::blk":[4,0,1,"c.nvm_addr::blk"],"nvm_addr::c":[4,0,1,"c.nvm_addr::c"],"nvm_addr::ch":[4,0,1,"c.nvm_addr::ch"],"nvm_addr::g":[4,0,1,"c.nvm_addr::g"],"nvm_addr::is_cached":[4,0,1,"c.nvm_addr::is_cached"],"nvm_addr::line":[4,0,1,"c.nvm_addr::line"],"nvm_addr::lun":[4,0,1,"c.nvm_addr::lun"],"nvm_addr::pg":[4,0,1,"c.nvm_addr::pg"],"nvm_addr::pl":[4,0,1,"c.nvm_addr::pl"],"nvm_addr::ppa":[4,0,1,"c.nvm_addr::ppa"],"nvm_addr::rsvd":[4,0,1,"c.nvm_addr::rsvd"],"nvm_addr::sec":[4,0,1,"c.nvm_addr::sec"],"nvm_bbt::addr":[5,0,1,"c.nvm_bbt::addr"],"nvm_bbt::dev":[5,0,1,"c.nvm_bbt::dev"],"nvm_bbt::nbad":[5,0,1,"c.nvm_bbt::nbad"],"nvm_bbt::nblks":[5,0,1,"c.nvm_bbt::nblks"],"nvm_bbt::ndmrk":[5,0,1,"c.nvm_bbt::ndmrk"],"nvm_bbt::ngbad":[5,0,1,"c.nvm_bbt::ngbad"],"nvm_bbt::nhmrk":[5,0,1,"c.nvm_bbt::nhmrk"],"nvm_cmd::addr":[9,0,1,"c.nvm_cmd::addr"],"nvm_cmd::admin":[9,0,1,"c.nvm_cmd::admin"],"nvm_cmd::appmask":[9,0,1,"c.nvm_cmd::appmask"],"nvm_cmd::apptag":[9,0,1,"c.nvm_cmd::apptag"],"nvm_cmd::cdw10":[9,0,1,"c.nvm_cmd::cdw10"],"nvm_cmd::cdw11":[9,0,1,"c.nvm_cmd::cdw11"],"nvm_cmd::cdw12":[9,0,1,"c.nvm_cmd::cdw12"],"nvm_cmd::cdw13":[9,0,1,"c.nvm_cmd::cdw13"],"nvm_cmd::cdw14":[9,0,1,"c.nvm_cmd::cdw14"],"nvm_cmd::cdw15":[9,0,1,"c.nvm_cmd::cdw15"],"nvm_cmd::cdw2":[9,0,1,"c.nvm_cmd::cdw2"],"nvm_cmd::cdw3":[9,0,1,"c.nvm_cmd::cdw3"],"nvm_cmd::control":[9,0,1,"c.nvm_cmd::control"],"nvm_cmd::data_len":[9,0,1,"c.nvm_cmd::data_len"],"nvm_cmd::dsmgmt":[9,0,1,"c.nvm_cmd::dsmgmt"],"nvm_cmd::flags":[9,0,1,"c.nvm_cmd::flags"],"nvm_cmd::metadata":[9,0,1,"c.nvm_cmd::metadata"],"nvm_cmd::metadata_len":[9,0,1,"c.nvm_cmd::metadata_len"],"nvm_cmd::nblocks":[9,0,1,"c.nvm_cmd::nblocks"],"nvm_cmd::nppas":[9,0,1,"c.nvm_cmd::nppas"],"nvm_cmd::nsid":[9,0,1,"c.nvm_cmd::nsid"],"nvm_cmd::opcode":[9,0,1,"c.nvm_cmd::opcode"],"nvm_cmd::ppa_list":[9,0,1,"c.nvm_cmd::ppa_list"],"nvm_cmd::reftag":[9,0,1,"c.nvm_cmd::reftag"],"nvm_cmd::result":[9,0,1,"c.nvm_cmd::result"],"nvm_cmd::rsvd":[9,0,1,"c.nvm_cmd::rsvd"],"nvm_cmd::rsvd1":[9,0,1,"c.nvm_cmd::rsvd1"],"nvm_cmd::slba":[9,0,1,"c.nvm_cmd::slba"],"nvm_cmd::status":[9,0,1,"c.nvm_cmd::status"],"nvm_cmd::timeout_ms":[9,0,1,"c.nvm_cmd::timeout_ms"],"nvm_cmd::user":[9,0,1,"c.nvm_cmd::user"],"nvm_cmd::vadmin":[9,0,1,"c.nvm_cmd::vadmin"],"nvm_cmd::vuser":[9,0,1,"c.nvm_cmd::vuser"],"nvm_geo::meta_nbytes":[11,0,1,"c.nvm_geo::meta_nbytes"],"nvm_geo::nblocks":[11,0,1,"c.nvm_geo::nblocks"],"nvm_geo::nchannels":[11,0,1,"c.nvm_geo::nchannels"],"nvm_geo::nluns":[11,0,1,"c.nvm_geo::nluns"],"nvm_geo::npages":[11,0,1,"c.nvm_geo::npages"],"nvm_geo::nplanes":[11,0,1,"c.nvm_geo::nplanes"],"nvm_geo::nsectors":[11,0,1,"c.nvm_geo::nsectors"],"nvm_geo::page_nbytes":[11,0,1,"c.nvm_geo::page_nbytes"],"nvm_geo::sector_nbytes":[11,0,1,"c.nvm_geo::sector_nbytes"],"nvm_geo::tbytes":[11,0,1,"c.nvm_geo::tbytes"],"nvm_ret::result":[15,0,1,"c.nvm_ret::result"],"nvm_ret::status":[15,0,1,"c.nvm_ret::status"],NVM_BBT_BAD:[5,3,1,"c.NVM_BBT_BAD"],NVM_BBT_DMRK:[5,3,1,"c.NVM_BBT_DMRK"],NVM_BBT_FREE:[5,3,1,"c.NVM_BBT_FREE"],NVM_BBT_GBAD:[5,3,1,"c.NVM_BBT_GBAD"],NVM_BBT_HMRK:[5,3,1,"c.NVM_BBT_HMRK"],NVM_BE_ANY:[6,3,1,"c.NVM_BE_ANY"],NVM_BE_IOCTL:[6,3,1,"c.NVM_BE_IOCTL"],NVM_BE_LBA:[6,3,1,"c.NVM_BE_LBA"],NVM_BE_SYSFS:[6,3,1,"c.NVM_BE_SYSFS"],NVM_BOUNDS_BLOCK:[7,3,1,"c.NVM_BOUNDS_BLOCK"],NVM_BOUNDS_CHANNEL:[7,3,1,"c.NVM_BOUNDS_CHANNEL"],NVM_BOUNDS_LUN:[7,3,1,"c.NVM_BOUNDS_LUN"],NVM_BOUNDS_PAGE:[7,3,1,"c.NVM_BOUNDS_PAGE"],NVM_BOUNDS_PLANE:[7,3,1,"c.NVM_BOUNDS_PLANE"],NVM_BOUNDS_SECTOR:[7,3,1,"c.NVM_BOUNDS_SECTOR"],NVM_FLAG_PMODE_DUAL:[14,3,1,"c.NVM_FLAG_PMODE_DUAL"],NVM_FLAG_PMODE_QUAD:[14,3,1,"c.NVM_FLAG_PMODE_QUAD"],NVM_FLAG_PMODE_SNGL:[14,3,1,"c.NVM_FLAG_PMODE_SNGL"],NVM_META_MODE_ALPHA:[12,3,1,"c.NVM_META_MODE_ALPHA"],NVM_META_MODE_CONST:[12,3,1,"c.NVM_META_MODE_CONST"],NVM_META_MODE_NONE:[12,3,1,"c.NVM_META_MODE_NONE"],nvm_addr:[4,4,1,"c.nvm_addr"],nvm_addr_check:[4,2,1,"c.nvm_addr_check"],nvm_addr_dev2gen:[4,2,1,"c.nvm_addr_dev2gen"],nvm_addr_erase:[4,2,1,"c.nvm_addr_erase"],nvm_addr_gen2dev:[4,2,1,"c.nvm_addr_gen2dev"],nvm_addr_gen2lba:[4,2,1,"c.nvm_addr_gen2lba"],nvm_addr_gen2off:[4,2,1,"c.nvm_addr_gen2off"],nvm_addr_lba2gen:[4,2,1,"c.nvm_addr_lba2gen"],nvm_addr_off2gen:[4,2,1,"c.nvm_addr_off2gen"],nvm_addr_pr:[4,2,1,"c.nvm_addr_pr"],nvm_addr_prn:[4,2,1,"c.nvm_addr_prn"],nvm_addr_read:[4,2,1,"c.nvm_addr_read"],nvm_addr_write:[4,2,1,"c.nvm_addr_write"],nvm_bbt:[5,4,1,"c.nvm_bbt"],nvm_bbt_alloc_cp:[5,2,1,"c.nvm_bbt_alloc_cp"],nvm_bbt_flush:[5,2,1,"c.nvm_bbt_flush"],nvm_bbt_flush_all:[5,2,1,"c.nvm_bbt_flush_all"],nvm_bbt_free:[5,2,1,"c.nvm_bbt_free"],nvm_bbt_get:[5,2,1,"c.nvm_bbt_get"],nvm_bbt_mark:[5,2,1,"c.nvm_bbt_mark"],nvm_bbt_pr:[5,2,1,"c.nvm_bbt_pr"],nvm_bbt_set:[5,2,1,"c.nvm_bbt_set"],nvm_bbt_state:[5,1,1,"c.nvm_bbt_state"],nvm_bbt_state_pr:[5,2,1,"c.nvm_bbt_state_pr"],nvm_be_id:[6,1,1,"c.nvm_be_id"],nvm_bounds:[7,1,1,"c.nvm_bounds"],nvm_bounds_pr:[7,2,1,"c.nvm_bounds_pr"],nvm_buf_alloc:[8,2,1,"c.nvm_buf_alloc"],nvm_buf_fill:[8,2,1,"c.nvm_buf_fill"],nvm_buf_from_file:[8,2,1,"c.nvm_buf_from_file"],nvm_buf_pr:[8,2,1,"c.nvm_buf_pr"],nvm_buf_to_file:[8,2,1,"c.nvm_buf_to_file"],nvm_cmd:[9,4,1,"c.nvm_cmd"],nvm_cmd_admin:[9,2,1,"c.nvm_cmd_admin"],nvm_cmd_pr:[9,2,1,"c.nvm_cmd_pr"],nvm_cmd_user:[9,2,1,"c.nvm_cmd_user"],nvm_cmd_vadmin:[9,2,1,"c.nvm_cmd_vadmin"],nvm_cmd_vuser:[9,2,1,"c.nvm_cmd_vuser"],nvm_cmd_vuser_pr:[9,2,1,"c.nvm_cmd_vuser_pr"],nvm_dev:[10,4,1,"c.nvm_dev"],nvm_dev_close:[10,2,1,"c.nvm_dev_close"],nvm_dev_get_bbts_cached:[10,2,1,"c.nvm_dev_get_bbts_cached"],nvm_dev_get_be_id:[10,2,1,"c.nvm_dev_get_be_id"],nvm_dev_get_erase_naddrs_max:[10,2,1,"c.nvm_dev_get_erase_naddrs_max"],nvm_dev_get_geo:[10,2,1,"c.nvm_dev_get_geo"],nvm_dev_get_meta_mode:[10,2,1,"c.nvm_dev_get_meta_mode"],nvm_dev_get_nsid:[10,2,1,"c.nvm_dev_get_nsid"],nvm_dev_get_pmode:[10,2,1,"c.nvm_dev_get_pmode"],nvm_dev_get_read_naddrs_max:[10,2,1,"c.nvm_dev_get_read_naddrs_max"],nvm_dev_get_verid:[10,2,1,"c.nvm_dev_get_verid"],nvm_dev_get_write_naddrs_max:[10,2,1,"c.nvm_dev_get_write_naddrs_max"],nvm_dev_open:[10,2,1,"c.nvm_dev_open"],nvm_dev_openf:[10,2,1,"c.nvm_dev_openf"],nvm_dev_pr:[10,2,1,"c.nvm_dev_pr"],nvm_dev_set_bbts_cached:[10,2,1,"c.nvm_dev_set_bbts_cached"],nvm_dev_set_erase_naddrs_max:[10,2,1,"c.nvm_dev_set_erase_naddrs_max"],nvm_dev_set_meta_mode:[10,2,1,"c.nvm_dev_set_meta_mode"],nvm_dev_set_pmode:[10,2,1,"c.nvm_dev_set_pmode"],nvm_dev_set_read_naddrs_max:[10,2,1,"c.nvm_dev_set_read_naddrs_max"],nvm_dev_set_write_naddrs_max:[10,2,1,"c.nvm_dev_set_write_naddrs_max"],nvm_geo:[11,4,1,"c.nvm_geo"],nvm_geo_pr:[11,2,1,"c.nvm_geo_pr"],nvm_meta_mode:[12,1,1,"c.nvm_meta_mode"],nvm_pmode:[14,1,1,"c.nvm_pmode"],nvm_pmode_str:[14,2,1,"c.nvm_pmode_str"],nvm_ret:[15,4,1,"c.nvm_ret"],nvm_ret_pr:[15,2,1,"c.nvm_ret_pr"],nvm_vblk:[16,4,1,"c.nvm_vblk"],nvm_vblk_alloc:[16,2,1,"c.nvm_vblk_alloc"],nvm_vblk_alloc_line:[16,2,1,"c.nvm_vblk_alloc_line"],nvm_vblk_erase:[16,2,1,"c.nvm_vblk_erase"],nvm_vblk_free:[16,2,1,"c.nvm_vblk_free"],nvm_vblk_get_addrs:[16,2,1,"c.nvm_vblk_get_addrs"],nvm_vblk_get_dev:[16,2,1,"c.nvm_vblk_get_dev"],nvm_vblk_get_naddrs:[16,2,1,"c.nvm_vblk_get_naddrs"],nvm_vblk_get_nbytes:[16,2,1,"c.nvm_vblk_get_nbytes"],nvm_vblk_get_pos_read:[16,2,1,"c.nvm_vblk_get_pos_read"],nvm_vblk_get_pos_write:[16,2,1,"c.nvm_vblk_get_pos_write"],nvm_vblk_pad:[16,2,1,"c.nvm_vblk_pad"],nvm_vblk_pr:[16,2,1,"c.nvm_vblk_pr"],nvm_vblk_pread:[16,2,1,"c.nvm_vblk_pread"],nvm_vblk_pwrite:[16,2,1,"c.nvm_vblk_pwrite"],nvm_vblk_read:[16,2,1,"c.nvm_vblk_read"],nvm_vblk_set_pos_read:[16,2,1,"c.nvm_vblk_set_pos_read"],nvm_vblk_set_pos_write:[16,2,1,"c.nvm_vblk_set_pos_write"],nvm_vblk_write:[16,2,1,"c.nvm_vblk_write"],nvm_ver_major:[17,2,1,"c.nvm_ver_major"],nvm_ver_minor:[17,2,1,"c.nvm_ver_minor"],nvm_ver_patch:[17,2,1,"c.nvm_ver_patch"],nvm_ver_pr:[17,2,1,"c.nvm_ver_pr"]}},objnames:{"0":["c","variable","variable"],"1":["c","enum","enum"],"2":["c","function","C function"],"3":["c","enumvalue","enumvalue"],"4":["c","struct","struct"]},objtypes:{"0":"c:variable","1":"c:enum","2":"c:function","3":"c:enumvalue","4":"c:struct"},terms:{"0x0":[1,5,6,12,14,22],"0x0000000000000002":[24,37],"0x000000000000000a":[24,34],"0x000000000001000a":34,"0x000000000002000a":34,"0x000000000003000a":34,"0x000000000004000a":34,"0x000000000005000a":34,"0x000000000006000a":34,"0x000000000007000a":34,"0x000000000008000a":34,"0x000000000064000a":19,"0x0000000000c8000a":34,"0x0000000001f4000a":34,"0x000000000440a642":19,"0x00000000084c8053":33,"0x000000010000000a":34,"0x000000010001000a":34,"0x000000010002000a":34,"0x000000010003000a":34,"0x000000010004000a":34,"0x000000010005000a":34,"0x000000010006000a":34,"0x000000010007000a":34,"0x000000010008000a":34,"0x000000010064000a":19,"0x0000000100c8000a":34,"0x0000000101f4000a":34,"0x000000020000000a":34,"0x000000020001000a":34,"0x000000020002000a":34,"0x000000020003000a":34,"0x000000020004000a":34,"0x000000020005000a":34,"0x000000020006000a":34,"0x000000020007000a":34,"0x000000020008000a":34,"0x000000020064000a":19,"0x0000000200c8000a":34,"0x0000000201f4000a":34,"0x000000030000000a":34,"0x000000030001000a":34,"0x000000030002000a":34,"0x000000030003000a":34,"0x000000030004000a":34,"0x000000030005000a":34,"0x000000030006000a":34,"0x000000030007000a":34,"0x000000030008000a":34,"0x000000030064000a":19,"0x0000000300c8000a":34,"0x0000000301f4000a":34,"0x000001000000000a":34,"0x000001000001000a":34,"0x000001000002000a":34,"0x000001000003000a":34,"0x000001000004000a":34,"0x000001000005000a":34,"0x000001000006000a":34,"0x000001000007000a":34,"0x000001000008000a":34,"0x000001000064000a":19,"0x0000010000c8000a":34,"0x0000010001f4000a":34,"0x000001010000000a":34,"0x000001010001000a":34,"0x000001010002000a":34,"0x000001010003000a":34,"0x000001010004000a":34,"0x000001010005000a":34,"0x000001010006000a":34,"0x000001010007000a":34,"0x000001010008000a":34,"0x000001010064000a":19,"0x0000010100c8000a":34,"0x0000010101f4000a":34,"0x000001020000000a":34,"0x000001020001000a":34,"0x000001020002000a":34,"0x000001020003000a":34,"0x000001020004000a":34,"0x000001020005000a":34,"0x000001020006000a":34,"0x000001020007000a":34,"0x000001020008000a":34,"0x000001020064000a":19,"0x0000010200c8000a":34,"0x0000010201f4000a":34,"0x000001030000000a":34,"0x000001030001000a":34,"0x000001030002000a":34,"0x000001030003000a":34,"0x000001030004000a":34,"0x000001030005000a":34,"0x000001030006000a":34,"0x000001030007000a":34,"0x000001030008000a":34,"0x000001030064000a":19,"0x0000010300c8000a":34,"0x0000010301f4000a":34,"0x000100000000000a":24,"0x000200000000000a":24,"0x000300000000000a":24,"0x0102000000000000":20,"0x0102000000000004":20,"0x02":[21,30,36],"0x0201000200c8000a":19,"0x0203000000000000":35,"0x020300000000002a":35,"0x020500000000002a":24,"0x0301000000000014":[24,37],"0x04010003000a00c8":33,"0x0500000000000190":[24,37],"0x0a0700000000014d":[24,37],"0x0d0700000000000a":37,"0x0e0700000000000a":37,"0x0f0700000000000a":37,"0x1":[1,5,6,12,14,22,34],"0x2":[1,5,6,12,14,22,34],"0x200":1,"0x4":[1,5,6],"0x8":[1,5],"0xaddr":[19,20,24,33],"0xff":34,"0xval":19,"10e2":0,"10e3":0,"10e5":0,"15th":31,"16kb":0,"32kb":0,"379ce192d401ab61":30,"4kb":0,"__cplusplu":1,"__liblightnvm":1,"__liblightnvm_h":1,"abstract":[1,16,25,32,37],"bj\u00f8rling":1,"byte":[1,4,8,11,16,34],"case":[0,34,37],"char":[1,8,10,14,19,30],"const":[1,4,5,8,10,11,14,15,16,35],"default":[1,10,19,22,24,37],"enum":[1,5,6,7,12,14],"function":[0,1,2,4,5,34],"gonz\u00e1l":1,"int":[1,4,5,7,8,9,10,14,16,17,30],"new":[0,1,16],"null":[1,5,8,16],"return":[1,4,5,8,9,10,14,16,17,30,35],"static":30,"true":37,"try":30,"var":[19,34],"void":[1,4,5,7,8,9,10,11,15,16,17],"while":0,abcdefghijklmnop:34,abid:34,abl:[1,5],about:[0,1,4,10,16,17,25,30],abov:[0,1,30,33,34,36],academ:27,access:[0,1,4,5,14,25],accessor:[1,4],accordingli:[1,4],accross:34,achiev:[24,37],across:[0,24,34,37],actual:[0,34],add:30,addit:[0,34,37],addition:18,addr:[1,4,5,9,16,20,24,34,35,37],address:1,adher:34,admin:[1,9],adress:34,adv:30,advis:1,after:[0,35],against:[1,4],ahead:34,aio:27,aka:[1,5],align:[1,4,8,16,34],all:[0,1,5,10,20,24,25,33,34,37],alloc:[1,5],allow:[0,25,34],alpha:[1,10],alreadi:0,also:[25,30,34,37],although:[1,4],alwai:0,amount:[1,8,34,37],ani:[0,1,6,33],anoth:33,appli:[0,37],applic:[25,37],appmask:[1,9],appropriatli:[1,8],approxim:37,apptag:[1,9],apt:30,arbitrari:[24,34],area:[0,1,2,10,19,22],argc:30,argument:[18,34],argv:30,aris:1,around:25,arrai:[1,4,5,9],assign:33,associ:[1,5,10,16,31],assum:[1,16,30,32],attribut:[1,36],author:1,avail:[0,2,18,25,27,28,30,32,34,37],back:[1,6],backend:[1,6,10,22],bad:1,basic:[25,30,34],bbt:[1,5,20,35],bbts_cach:[1,10,21,30,36],be_id:[21,30,36],becaus:34,been:[0,1,5,34],befor:[0,1,16],begin:[1,16,36],behav:37,behavior:[18,19,20,21,22,23,24],belong:0,below:36,between:[0,37],bin:[19,34],binari:1,bintrai:30,bit:[0,1,15],bjorl:31,blk:[1,4,5,16,19,20,21,24,30,33,34,35,36,37],blk_len:[21,30,36],blk_off:[21,30,36],block:[0,1,4],board:27,bonnet:31,bound:[0,1,4,7,10,11,19,22,34],boundari:[1,4,7],branch:28,breviti:[20,37],buf:[1,4,8,16],buffer:[1,4],build:30,busi:1,cach:[0,1,4,10],calcul:0,call:1,can:[0,1,4,19,24,25,28,30,33,34,35,37],capabl:[0,1],caus:[0,1],cdefghijklmnopqr:[19,34],cdw10:[1,9],cdw11:[1,9],cdw12:[1,9],cdw13:[1,9],cdw14:[1,9],cdw15:[1,9],cdw2:[1,9],cdw3:[1,9],cdw:[1,9],ceas:0,cell:0,ch_bgn:[1,16,24],ch_end:[1,16,24],ch_len:[21,30,36],ch_off:[21,30,36],challeng:34,chang:[1,10,16,35],channel:[1,4,11,16,18,19,20,21,24],characterist:0,check:[1,4],chip:0,chmod:30,choos:34,clara:31,cli:[18,19,20,21,22,24,25,29],client:0,clock:37,clone:[27,30],close:[0,34],cmd:[1,6,9],cnex:27,cnexlab:[1,27],code:[1,4,5,9,15,18],cognit:37,com:[1,27,28,30],come:37,command:[0,1],common:[0,1,9,25,33],commun:34,complet:[1,15],concern:[25,33,34,37],condit:[1,15,18],confer:31,configur:27,consequenti:1,consid:0,consist:[19,24,37],construct:[19,20,24,25,32,33,34,37],consult:[0,1,16],consum:37,contain:[0,1,2,4,34],content:[1,4,8,16,25],context:1,contract:1,contrast:[1,4,5],contributor:1,control:[0,1,9,22,27,37],conveni:[34,37],convers:33,convert:[1,4,19,33],copi:[1,5,35],copyright:1,core:25,correspond:32,count:[1,16,23],creat:[1,10,25,34],creation:37,current:0,cursor:[1,16],cycl:0,damag:1,data:[0,1,2,10,16,19,22,33,34],data_len:[1,9],deadbeef:27,deal:0,dealloc:[1,5],deb:30,debug:18,decompos:0,decreas:0,deeper:30,defect:0,defin:[0,1,16],demonstr:37,depend:0,describ:[0,1,5,18,26,34],descript:[1,7,27],descriptor:1,destin:[1,8],destroi:[1,5,10,16],detail:[25,30],dev2gen:19,dev:[1,4,5,9,10,16,19,20,21,24,30,32,33,34,35,36,37],dev_geo:[21,30,36],dev_path:[1,10,19,20,21,23,24],dev_ppaf:[21,30,36],dev_ppaf_mask:[21,30,36],develop:37,die:0,differ:[0,1,10,16,34,37],direct:1,directli:0,disabl:[1,10,19,22,34],disclaim:1,discuss:0,distinct:37,distribut:1,disturb:0,dive:[30,34],document:[1,2,37],doe:30,done:[0,33,34,35],down:33,downsid:0,dragon:27,drive:27,drive_bbt:27,drive_metadata:27,drive_metas:27,drive_nam:27,dsmgmt:[1,9],dual:[0,1,14,19,21,22,24,30,34,36,37],due:0,dump:[1,8,19,20,21,22,24,34],dure:0,dword:[1,9],dynam:30,each:[0,1,5,34,35,37],easi:25,ecc:0,echo:30,efghijklmnopqrst:19,eight:[0,19,34,37],either:[24,37],elaps:[24,34,37],emc:27,enabl:[1,10,19,27],encapsul:[1,4,9,15,24,25,37],end:[1,6,16],endif:1,enough:0,ensur:34,entir:[20,35],entiti:[1,16],entri:[20,35],enumer:[1,6,7,12],environ:[18,19,20,21],equal:[1,4],equival:[1,30,34,37],eras:[0,1,4,10,16,19,22],erase_naddrs_max:[21,30,36],errno:[1,4,5,8,9,10,16],error:[0,1,4,5,8,9,10,14,15,16,34],essenti:36,etc:30,even:1,event:1,everi:33,exampl:[0,18,19,20,21,24,30,34,37],exce:[1,4],exceed:[1,4],except:[1,33],execut:[0,1,9,34,35],exemplari:1,exist:35,expect:19,experi:[25,30,37],experiment:18,explor:25,expos:[25,35,37],express:1,extens:29,extern:1,extra:0,facilit:[1,16],fail:[0,1,34],far:34,fast17:31,fast:31,fewer:34,field:[1,9],fifth:33,figur:34,file:[1,8,19,24,31,34],fill:[1,4,5,8,9,16],filter:35,fire:27,first:[24,34],fit:1,fix:[0,37],flag:[1,4,5,6,9,10,27],flash:[0,25,34],flat:37,flush:[1,5],focu:25,follow:[1,2,18,22,26,27,30,34,35],form:[1,2,16,19],format:[1,4],four:[0,19,24,34],free:[1,5,8,20,35],frequent:0,from:[1,5,8,16,18,19,21,24,25,30,33,34,36],from_geo:[19,24,33,34],from_hex:19,full:[0,19,20,21,23,24,34,37],fulli:[0,34],fundament:0,further:0,gbad:[20,35],gcc:30,gen2dev:[19,33],gen2lba:19,gen2off:19,gen:[19,33],gener:[0,1,4],geo:[1,4,8,11,21],geometr:[1,4],geometri:[1,4,8,10],get:[1,8,20,30,35],getter:36,ghijklmnopqrstuv:34,git:[27,28,30],github:[27,28,30],given:[1,4,5,7,8,9,10,11,14,15,16,18,19,24,33,34,35,36,37],goe:34,gonzalez:31,good:[0,1,5],granular:[0,1,4,8,33,34],great:37,greater:[1,8],grep:35,group:2,grown:[1,5,20,35],grown_bad:[1,5],hand:34,handl:[0,1,4,5,9,10,16,33,34,36],hardwar:0,have:[0,1,16,30,34],hello:25,helper:34,here:[0,25,26,28],hexadecim:[19,33],hexdump:[19,34],hierarchi:0,hint:[0,1,4,19,22,24,37],hkp:30,host:[1,5,27,35],how:[20,24,26,32],howev:[0,1,19,25,33,34,37],http:[19,20,21,24,27,30,31],human:[1,11],humanli:[1,4,5,7,15,16],ident:1,identifi:[1,10],ifdef:1,ifndef:1,ijklmnopqrstuvwx:[19,34],impli:1,improv:34,incident:1,includ:[1,2,25,30],inclus:[1,16],increas:[0,24,34,37],index:[1,16,25,33,37],indic:[1,5,8,9,10,16],indirect:1,info:[21,30,36],inform:[0,1,8,10,16,17],initi:[1,16],initialit:18,input:[19,24,34],inquir:27,inspect:[2,19,34],instal:[27,30,32],instead:[1,30,34,37],integr:[25,37],intend:25,interact:25,interest:35,interfac:[0,1,10,16],intern:[0,1,16],interpret:[1,4,5],interrupt:1,introduc:[25,32,34,37],introduct:[25,30],inttyp:1,invalid:34,invok:[1,10,18,36],involv:36,ioctl:[1,6],is_cach:[1,4],issu:[0,32,34],itself:18,javier:[1,31],jump:25,kei:30,kernel:28,keyserv:30,know:[1,4,34,36],known:37,kvm:27,lab:27,lastli:36,later:34,lba2gen:19,lba:[1,4,6],lba_index:27,lbbtabl:27,leak:0,length:[1,4,5],less:35,let:25,level:[0,1,4,5,9,15,33,34,37],liabil:1,liabl:1,lib:30,libc:[1,16,25,37],liblightnvm:[0,1,6,19,20,21,24,25,30,32,37],liblightnvm_spec:1,liblnvm:28,librari:[1,17],lightnvm:[19,20,21,24,27,31],like:[1,16,25],likewis:24,limit:[0,1,34],line:[1,4],line_eras:[24,37],line_pad:24,line_read:[24,37],line_writ:[24,37],linear:37,link:30,linux:[27,28,30,31],list:[1,4,19,20,21,23,24,27,30],ll2pmode:27,llightnvm:30,lmetadata:27,lmetas:27,lnvm:[18,29],load:37,locat:[19,33],logic:[0,1,4,23],look:[25,30],loss:1,lost:0,low:33,lower:[0,1,4,5,9,15],lowest:[1,9],lun:[1,4,5,11,16,19,20,21,24,30,33,34,35,36,37],lun_bgn:[1,16,24],lun_end:[1,16,24],lun_len:[21,30,36],lun_off:[21,30,36],lund:1,mai:[0,27,29],main:30,major:[1,17,19,20,21,23,24],make:[18,27,30,35],manag:[1,5],mang:32,manifold:18,manner:[0,37],manufactur:[0,1,5],map:25,mark:[1,5,20,35],mark_b:20,mark_d:20,mark_f:20,mark_g:[20,35],mark_h:20,mask:[1,4,7],match:[1,8],materi:1,matia:[1,27,31],max:34,maximum:[1,10],mdt:27,mean:25,meant:18,meet:[1,16,26],member:[4,5,9,11,15,33],memori:[0,1,4,5,8,25,27],mention:34,merchant:1,mere:37,met:[1,30],meta:[1,4,10,12,19,22],meta_mod:[1,10,21,30,36],meta_nbyt:[1,4,11,21,30,36],metadata:[1,4,9,11],metadata_len:[1,9],might:[0,1,34],min:[1,4,16],minim:[0,1,4,8],minimum:24,minor:[1,17,19,20,21,23,24],misc:1,miscellan:2,mix:[1,16],mlc:0,mnopqrstuvwxyzab:[19,34],modif:1,modifi:[18,19,20,21,23,24,35],modul:25,more:33,most:[18,30,33],multi:0,multipl:[0,1,8,16,34,37],must:[0,1,4,8,16,34],naddr:[1,4,5,10,16,24,34,37],name:[1,21,30,36],namespac:[1,10,27],nand:[0,25,30],nbad:[1,5,20,35],nblk:[1,5,20,35],nblock:[1,9,11,21,30,36],nbyte:[1,4,8,24,34,37],nchannel:[1,11,21,30,36],nda:0,ndmrk:[1,5,20,35],nearbi:0,necessari:0,need:[1,4,26,30,33,34],neglig:1,neighbor:0,next:0,ngbad:[1,5],nhmrk:[1,5,20,35],nine:34,nlbaf:27,nlun:[1,11,21,30,36],nmbyte:[24,34,37],none:[1,10],note:[0,1,4,5,8,10,16,32,34],notic:1,notion:33,now:[1,16,34],npage:[1,11,21,30,36],npl_blk:[20,35],nplane:[1,11,21,30,34,36],nppa:[1,9],nsector:[1,11,21,30,34,36],nsid:[1,9],number:[0,1,10,11,16,22,27,34],nvm:[1,4,10,16,19,20,21,23,24],nvm_:18,nvm_addr:1,nvm_addr_:19,nvm_addr_check:1,nvm_addr_dev2gen:1,nvm_addr_dev2lba:1,nvm_addr_dev2off:1,nvm_addr_eras:1,nvm_addr_gen2dev:1,nvm_addr_gen2lba:1,nvm_addr_gen2off:1,nvm_addr_lba2gen:1,nvm_addr_mark:[1,4],nvm_addr_off2gen:1,nvm_addr_pr:1,nvm_addr_prn:1,nvm_addr_read:1,nvm_addr_writ:1,nvm_bbt:1,nvm_bbt_:20,nvm_bbt_alloc_cp:1,nvm_bbt_bad:[1,5],nvm_bbt_dmrk:[1,5],nvm_bbt_flush:1,nvm_bbt_flush_al:1,nvm_bbt_free:1,nvm_bbt_gbad:[1,5],nvm_bbt_get:1,nvm_bbt_hmrk:[1,5],nvm_bbt_mark:1,nvm_bbt_pr:1,nvm_bbt_set:1,nvm_bbt_state:1,nvm_bbt_state_pr:1,nvm_be:3,nvm_be_al:1,nvm_be_ani:[1,6,22],nvm_be_id:[1,3],nvm_be_ioctl:[1,6,22],nvm_be_ioctl_sysf:22,nvm_be_lba:[1,6],nvm_be_sysf:[1,6],nvm_bound:[1,3],nvm_bounds_block:[1,7],nvm_bounds_channel:[1,7],nvm_bounds_lun:[1,7],nvm_bounds_pag:[1,7],nvm_bounds_plan:[1,7],nvm_bounds_pr:[1,3],nvm_bounds_sector:[1,7],nvm_buf_alloc:1,nvm_buf_alloca:1,nvm_buf_fil:1,nvm_buf_fre:[1,8],nvm_buf_from_fil:1,nvm_buf_pr:1,nvm_buf_to_fil:1,nvm_cli_be_id:22,nvm_cli_erase_naddrs_max:22,nvm_cli_meta_pr:22,nvm_cli_noverifi:22,nvm_cli_pmod:[19,22,34],nvm_cli_read_naddrs_max:22,nvm_cli_write_naddrs_max:22,nvm_cmd:1,nvm_cmd_admin:1,nvm_cmd_pr:1,nvm_cmd_user:1,nvm_cmd_vadmin:1,nvm_cmd_vuser:1,nvm_cmd_vuser_pr:1,nvm_dev:[1,4,5,9],nvm_dev_:21,nvm_dev_attr_pr:1,nvm_dev_clos:1,nvm_dev_get_:36,nvm_dev_get_bbts_cach:1,nvm_dev_get_be_id:1,nvm_dev_get_erase_naddrs_max:1,nvm_dev_get_fd:1,nvm_dev_get_geo:1,nvm_dev_get_mccap:1,nvm_dev_get_meta_mod:1,nvm_dev_get_nam:1,nvm_dev_get_nsid:1,nvm_dev_get_path:1,nvm_dev_get_pmod:1,nvm_dev_get_ppaf:1,nvm_dev_get_ppaf_mask:1,nvm_dev_get_read_naddrs_max:1,nvm_dev_get_verid:1,nvm_dev_get_write_naddrs_max:1,nvm_dev_name_len:1,nvm_dev_open:[1,4,5,9],nvm_dev_openf:1,nvm_dev_path_len:1,nvm_dev_pr:1,nvm_dev_set_bbts_cach:1,nvm_dev_set_erase_naddrs_max:1,nvm_dev_set_meta_mod:1,nvm_dev_set_pmod:1,nvm_dev_set_read_naddrs_max:1,nvm_dev_set_write_naddrs_max:1,nvm_dump:19,nvm_flag_default:1,nvm_flag_pmode_du:[1,14],nvm_flag_pmode_quad:[1,14],nvm_flag_pmode_sngl:[1,14],nvm_flag_scrbl:1,nvm_geo:[1,4,8,10],nvm_geo_pr:1,nvm_io_dual_access:[1,14],nvm_io_quad_access:[1,14],nvm_lba_:23,nvm_lba_pread:1,nvm_lba_pwrit:1,nvm_meta:3,nvm_meta_mod:[1,3],nvm_meta_mode_:[1,10],nvm_meta_mode_alpha:[1,12],nvm_meta_mode_const:[1,12],nvm_meta_mode_non:[1,12],nvm_mode:3,nvm_naddr_max:1,nvm_pmode:[1,3],nvm_pmode_str:[1,3],nvm_quirk:1,nvm_quirk_nsid_by_convent:1,nvm_quirk_oob_read_1st4bytes_nul:1,nvm_quirk_pmode_erase_runrol:1,nvm_ret:[1,3,4,5,9],nvm_ret_pr:[1,3],nvm_spec_ppaf_nand:1,nvm_spec_ppaf_nand_mask:1,nvm_vblk:[1,10],nvm_vblk_:24,nvm_vblk_alloc:1,nvm_vblk_alloc_lin:1,nvm_vblk_eras:1,nvm_vblk_free:1,nvm_vblk_get_addr:1,nvm_vblk_get_dev:1,nvm_vblk_get_geo:[1,11],nvm_vblk_get_naddr:1,nvm_vblk_get_nbyt:1,nvm_vblk_get_pos_read:1,nvm_vblk_get_pos_writ:1,nvm_vblk_pad:1,nvm_vblk_pr:1,nvm_vblk_pread:1,nvm_vblk_pwrite:1,nvm_vblk_read:1,nvm_vblk_set_pos_read:1,nvm_vblk_set_pos_writ:1,nvm_vblk_write:1,nvm_ver:3,nvm_ver_major:[1,3],nvm_ver_minor:[1,3],nvm_ver_patch:[1,3],nvm_ver_pr:[1,3],nvme0n1:[1,10,19,20,21,24,30,32,33,34,35,36,37],nvme:[1,10,15,18,27,29,33],obtain:[1,4,5,9,10,14,16,25,34],occur:[0,34],off2gen:19,off:[1,4],off_t:1,offer:[25,37],offset:[1,4,16,23],often:[0,34],omit:[20,37],onli:[0,34],opaqu:[1,10,16],opcod:[1,9],open:[0,1,10,18,21],openchannelssd:[27,28,30],oper:[0,24,25,26],opqrstuvwxyzabcd:19,optim:[0,25],option:[19,20,21,24,26,34],order:[1,16,27],org:31,organ:0,other:[0,1],otherwis:1,our:34,out:[0,1,10,11,19,22,30,35],output:[19,20,24,30,33,34,35,36,37],over:[0,37],pack:[1,4],packag:[0,30],pad:[1,16,24],page:[0,1,4,11,19,25,33,34],page_nbyt:[1,11,21,30,36],par:[1,9],parallel:[0,24,25,34,37],param:1,paramet:[4,5,8,9,10,14,15,16,19,20,24,29,33],part:[32,33,36],particular:1,patch:[1,17,19,20,21,23,24],path:[1,8,10,19,21,24,30,32,36],payload:[19,24,34],peak:34,peal:25,per:[0,1,11],perform:[0,1,16,19,25,34],permit:1,perror:30,persist:[0,1,5,35],pg_len:[21,30,36],pg_off:[21,30,36],philipp:31,physic:[0,1,4,16,19,24,25],pitfal:25,pl_blk:[20,35],pl_len:[21,30,36],pl_off:[21,30,36],place:[25,30,34],plane:[0,1,4,10,11,14,16,19,22],plane_mod:[1,10],pleas:27,pmode:[1,10,14,19,21,24,30,34,36,37],point:34,pointer:[1,4,5,8,9,15,16],posit:[1,16],possibl:1,power:37,ppa:[1,4],ppa_list:[1,9],practic:30,pread:[1,16,23,25],prefix:18,prerequisit:25,present:[1,9,31],prevent:0,primari:34,primit:37,print:[1,4,5,7,8,9,10,11,15,16,17,19,20,21,24,30],privilig:[20,35],process:0,procur:1,produc:36,profit:1,program:0,prone:0,properli:36,proportion:37,protect:0,provid:[0,1,2,5,18,19,24,25,32,34,37],pseudo:[1,10,12],pure:37,purpos:[1,4,18,27],put:30,pwrite:[1,16,23],qemu:27,qlc:0,qrstuvwxyzabcdef:34,quad:[1,14,22],quick:25,quirk:1,radian:27,raid:0,rang:24,rate:0,raw:2,read_naddrs_max:[21,30,36],read_wm:19,readabl:[1,4,5,7,11,15,16],readili:30,receiv:34,recv:30,redistribut:1,reduc:37,refer:[0,25],reftag:[1,9],regard:37,regular:1,rel:[19,33],relax:34,remain:[1,16,34],repeat:19,replic:0,repo:28,repres:33,represent:[1,4,5,9,11,14,15,19],reproduc:1,request:27,requir:[0,20,35],research:27,reserv:[1,4,5,35],reset:[1,16],resid:[1,5],respect:[0,1,4],respons:37,result:[0,1,4,5,9,15,34],ret:[1,4,5,9,15],retain:1,retent:0,retir:0,retriev:[1,5,10,16],rewritten:0,right:[1,25],rling:31,rms325:27,round:34,rsvd1:[1,9],rsvd3:[1,9],rsvd:[1,4,9],rule:0,run:27,same:[0,1,16,34,37],santa:31,satisfi:34,scale:37,scatter:34,scrambler:1,sdk:27,search:25,sec:[1,4,19,20,21,24,30,33,34,35,36,37],sec_len:[21,30,36],sec_off:[21,30,36],second:34,section:[0,2,18,19,20,21,23,24,26,30,34,37],sector:[0,1,4,5,11,19,33,34],sector_nbyt:[1,4,11,21,30,36],see:[1,5,10,11,16,18,19,20,21,23,24,29,30,37],seen:34,send:[1,10,34],sensit:1,sequenc:[0,19],sequenti:0,serial:27,serv:18,servic:1,session:31,set:[1,4,5,8,9,10,16,18,19,20,22],set_b:20,set_d:20,set_eras:[24,37],set_f:20,set_g:20,set_h:20,set_pad:24,set_read:[24,37],set_writ:[24,37],setup:[27,30],sever:0,shall:1,share:0,should:[0,1,10,30],show:33,shown:36,shrink:0,side:[1,5],similar:[0,30],simon:1,sinc:0,singl:[0,1,14,34],size:[0,1,4,8,16,34],size_t:[1,8,11,16],slba:[1,9],slc:0,slightli:0,slund:1,smallest:34,sneak:34,sngl:[19,34],softmmu:27,softwar:[1,37],some:0,sourc:[1,8,18,28,30],space:1,span:[1,16],special:1,specif:[0,1,4,10,25],specifi:[33,34,37],speedup:37,ssd:[1,18,21],ssize_t:[1,4,16],ssw:[21,30,36],start:[1,16,25,26],state:[1,5,19],statu:[1,4,5,9,15,34],stdint:1,stdio:30,stdlib:1,stdout:[1,8,19,20,21,22,24],storag:[0,31],store:[0,1,4,5,34],strict:1,string:[1,14],struct:[1,4,5,8,9,10,11,15,16,30,33,35],structur:[1,2,4,5,33,36],stuvwxyzabcdefgh:[19,34],subsect:2,subset:[25,37],substitut:1,subsystem:31,succe:[0,34],success:[1,4,5,8,9,10,14,16,34],successfulli:[0,34],sudo:[20,27,30,35],suffic:30,suit:30,supplement:18,support:[25,26,27],synthet:[1,16,19,24],sysadmin:[20,35],sysf:[1,6],system:[1,16,24,25,26,27],tabl:1,take:[1,25,33,34],target:[27,30],task:34,tbyte:[1,11,21,30,36],technic:31,techniqu:0,technolog:31,tediou:34,tee:30,ten:24,termin:36,test:18,text:[1,9],textual:[1,9,19],than:[1,8,34],thei:34,theori:1,therebi:25,therefor:[34,37],thereof:25,thi:[0,1,4,5,18,30,32,34,37],thin:25,three:0,threshold:0,through:[29,32,35],throughout:32,thu:[34,35,37],thumb:0,time:[0,34,37],timeout_m:[1,9],tlc:0,tmbyte:[21,30,36],tmp:[19,34],tool:[18,25,26],tort:1,total:[1,5,11,34],translat:33,transport:22,trip:34,tutori:[25,30],two:34,type:[0,1],typic:0,ubuntu:30,uint16_t:[1,4,5,9],uint32_t:[1,5,9,15],uint64_t:[1,4,5,9,15],uint8_t:[1,5,9],under:0,underli:35,understand:0,unexpect:34,union:[1,4,9],unit:[0,18,24,25,34,37],unkn:[1,14],unknown:34,unless:0,unrecover:0,unsign:[1,4],updat:[1,5,16],upon:27,upper:[0,34],url:31,usag:[18,19,20,21,23,24],usenix:31,user:[0,1,4,9],usr:30,usual:0,util:[24,25,37],uvwxyzabcdefghij:19,vadmin:[1,9],val:19,valid:[1,5],valu:[1,5,6,7,12,14,22,33,36],variabl:[18,19,20,21],variou:0,vblk:[1,16,24,34,37],vector:[1,9,19,25,32],vendor:0,ver:[19,20,21,23,24],verid:[1,10,21,30,36],verif:22,version:[1,17],via:[25,34],virtf:27,virtual:[1,11],vuser:[1,9],wai:[0,1],wall:37,want:[1,16],warranti:1,weak:37,wear:0,well:[1,5],were:0,what:[25,26,30,34],when:[0,1,10,22,24,25,34,36,37],where:[1,8,34],whether:[1,4,10],which:[0,1,4,5,19,22,30,34,35,36,37],within:[0,1,4,16,33,34],without:[1,18,19,34],work:[0,25,30,34,36,37],workload:37,world:30,worri:[1,4],worth:34,wrap:30,wrapper:25,write_naddrs_max:[21,30,36],write_wm:19,written:[0,1,16,34,37],wrong:34,www:31,wxyzabcdefghijkl:34,x86_64:27,xenial:30,yield:[33,34,35,36,37],you:[1,16,25,26,28,29,30],your:[27,30],yzabcdefghijklmn:19,zero:[1,8,33]},titles:["Background","Public Header","C API","Miscellaneous","nvm_addr - Addressing","nvm_bbt - Bad-Block-Table","nvm_be","nvm_bounds","nvm_buf - Buffer Allocation","nvm_cmd - Raw Commands","nvm_dev - Device Management","nvm_geo - Geometry","nvm_meta","nvm_mode","nvm_pmode","nvm_ret","nvm_vblk - Virtual Block","nvm_ver","Command-Line Interface","nvm_addr","nvm_bbt","nvm_dev","Environment Variables","nvm_lba","nvm_vblk","User space I/O library for Open-Channel SSDs","Prerequisites","Open-Channel SSD","Operating System Support","Management Tool","Quick Start","References","Tutorial Introduction","Physical Addressing","Vectorized IO to NAND media","Bad-Block-Table","Obtaining device information","Virtual Block"],titleterms:{"public":1,address:[4,19,33],alloc:8,api:[2,30],architectur:0,background:0,bad:[5,35],befor:34,block:[5,16,20,24,35,37],buffer:8,channel:[25,27,30],cli:30,command:[9,18],compil:30,constraint:0,contigu:34,devic:[0,10,19,21,33,36],environ:22,eras:[24,34],failur:0,format:[19,33],gener:[19,33],geometri:11,header:1,hello:30,indic:25,inform:[21,36],interfac:18,introduct:32,librari:25,line:[18,24,37],manag:[10,29],maximum:34,media:[0,34],minim:34,minimum:34,miscellan:3,mode:0,nand:34,non:34,nvm_addr:[4,19],nvm_addr_check:4,nvm_addr_dev2gen:4,nvm_addr_eras:4,nvm_addr_gen2dev:4,nvm_addr_gen2lba:4,nvm_addr_gen2off:4,nvm_addr_lba2gen:4,nvm_addr_off2gen:4,nvm_addr_pr:4,nvm_addr_prn:4,nvm_addr_read:4,nvm_addr_writ:4,nvm_bbt:[5,20],nvm_bbt_alloc_cp:5,nvm_bbt_flush:5,nvm_bbt_flush_al:5,nvm_bbt_free:5,nvm_bbt_get:5,nvm_bbt_mark:5,nvm_bbt_pr:5,nvm_bbt_set:5,nvm_bbt_state:5,nvm_bbt_state_pr:5,nvm_be:6,nvm_be_id:6,nvm_bound:7,nvm_bounds_pr:7,nvm_buf:8,nvm_buf_alloc:8,nvm_buf_fil:8,nvm_buf_from_fil:8,nvm_buf_pr:8,nvm_buf_to_fil:8,nvm_cmd:9,nvm_cmd_admin:9,nvm_cmd_pr:9,nvm_cmd_user:9,nvm_cmd_vadmin:9,nvm_cmd_vuser:9,nvm_cmd_vuser_pr:9,nvm_dev:[10,21],nvm_dev_clos:10,nvm_dev_get_bbts_cach:10,nvm_dev_get_be_id:10,nvm_dev_get_erase_naddrs_max:10,nvm_dev_get_geo:10,nvm_dev_get_meta_mod:10,nvm_dev_get_nsid:10,nvm_dev_get_pmod:10,nvm_dev_get_read_naddrs_max:10,nvm_dev_get_verid:10,nvm_dev_get_write_naddrs_max:10,nvm_dev_open:10,nvm_dev_openf:10,nvm_dev_pr:10,nvm_dev_set_bbts_cach:10,nvm_dev_set_erase_naddrs_max:10,nvm_dev_set_meta_mod:10,nvm_dev_set_pmod:10,nvm_dev_set_read_naddrs_max:10,nvm_dev_set_write_naddrs_max:10,nvm_geo:11,nvm_geo_pr:11,nvm_lba:23,nvm_meta:12,nvm_meta_mod:12,nvm_mode:13,nvm_pmode:14,nvm_pmode_str:14,nvm_ret:15,nvm_ret_pr:15,nvm_vblk:[16,24],nvm_vblk_alloc:16,nvm_vblk_alloc_lin:16,nvm_vblk_eras:16,nvm_vblk_free:16,nvm_vblk_get_addr:16,nvm_vblk_get_dev:16,nvm_vblk_get_naddr:16,nvm_vblk_get_nbyt:16,nvm_vblk_get_pos_read:16,nvm_vblk_get_pos_writ:16,nvm_vblk_pad:16,nvm_vblk_pr:16,nvm_vblk_pread:16,nvm_vblk_pwrite:16,nvm_vblk_read:16,nvm_vblk_set_pos_read:16,nvm_vblk_set_pos_writ:16,nvm_vblk_write:16,nvm_ver:17,nvm_ver_major:17,nvm_ver_minor:17,nvm_ver_patch:17,nvm_ver_pr:17,obtain:36,open:[25,27,30],oper:28,physic:[27,33],plane:[24,37],prerequisit:26,quick:30,raw:9,read:[0,24,34],refer:31,retriev:[20,21],run:30,scope:33,set:[24,37],space:25,span:[24,37],ssd:[25,27,30],start:30,state:20,submit:19,support:28,system:28,tabl:[5,25,35],tool:29,tutori:32,updat:20,user:25,variabl:22,vector:34,virtual:[16,27,37],write:[0,24,34]}})